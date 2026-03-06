import { useState, useRef, useEffect } from "react";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { motion } from "framer-motion";
import { Camera, Download, CheckCircle, XCircle } from "lucide-react";

interface QRScannerProps {
  scannerImage?: string;
  formPdfPath?: string;
}

const QRScanner = ({
  scannerImage = "/photos/scanner.jpg",
  formPdfPath = "/photos/form.pdf"
}: QRScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDownload, setShowDownload] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const qrRegionId = "qr-scanner-region";

  useEffect(() => {
    return () => {
      // Cleanup scanner on unmount
      if (scannerRef.current) {
        try {
          scannerRef.current.clear();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const startScanning = () => {
    setError(null);
    setIsScanning(true);
    setScanResult(null);
    setShowDownload(false);

    // Wait for DOM to be ready
    setTimeout(() => {
      const scanner = new Html5QrcodeScanner(
        qrRegionId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        /* verbose= */ false
      );

      scannerRef.current = scanner;

      scanner.render(
        (decodedText: string) => {
          // Success callback
          setScanResult(decodedText);
          setShowDownload(true);
          setIsScanning(false);
          // Stop scanning after success
          scanner.clear().catch(console.error);
        },
        (errorMessage: string) => {
          // Error callback - ignore continuous scanning errors
          // Only show meaningful errors
          if (errorMessage.includes("NotFoundException")) {
            setError("No QR code found in the frame");
          }
        }
      );
    }, 100);
  };

  const stopScanning = () => {
    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
    }
    setIsScanning(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = formPdfPath;
    link.download = "admission-form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Scan QR to Download Form
        </h3>
        <p className="text-muted-foreground text-sm">
          Scan the QR code to access the admission form
        </p>
      </div>

      {/* Scanner Image Reference */}
      {!isScanning && !showDownload && (
        <div className="mb-6">
          <img
            src={scannerImage}
            alt="QR Scanner Reference"
            className="w-full max-w-xs mx-auto rounded-xl shadow-md"
          />
        </div>
      )}

      {/* QR Scanner Region */}
      {isScanning && (
        <div className="mb-6">
          <div id={qrRegionId} className="mx-auto max-w-sm"></div>
          {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-600">
              <XCircle size={20} />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>
      )}

      {/* Scan Result & Download */}
      {showDownload && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
            <CheckCircle size={24} />
            <span className="font-semibold">QR Code Scanned Successfully!</span>
          </div>
          
          {scanResult && (
            <p className="text-sm text-muted-foreground mb-4">
              Scanned: {scanResult}
            </p>
          )}

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Download size={20} />
            Download Admission Form
          </button>
        </motion.div>
      )}

      {/* Action Buttons */}
      {!isScanning && !showDownload && (
        <div className="text-center">
          <button
            onClick={startScanning}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Camera size={20} />
            Start Scanner
          </button>
        </div>
      )}

      {isScanning && (
        <div className="text-center">
          <button
            onClick={stopScanning}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <XCircle size={20} />
            Stop Scanner
          </button>
        </div>
      )}
    </div>
  );
};

export default QRScanner;

