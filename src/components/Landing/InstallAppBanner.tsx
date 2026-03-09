import { Link } from "react-router-dom";
import { Download, Smartphone, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascot from "@/assets/branding/sadguru-mascot.png";

const APK_DOWNLOAD_URL = "https://github.com/Creatoranuj/sadguruclasses/releases/download/v1.0-20260309-0510/app-debug.apk";
const apkQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(APK_DOWNLOAD_URL)}`;

const InstallAppBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            {/* Left: info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <img
                  src={mascot}
                  alt="Sadguru Mascot"
                  className="h-16 w-16 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Download Our App</h2>
                  <p className="text-sm text-muted-foreground">Learn anytime, anywhere — even offline!</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href={APK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Download className="h-5 w-5" />
                    Download APK (Android)
                  </Button>
                </a>
                <Link to="/install">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Smartphone className="h-5 w-5" />
                    All Install Options
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: QR code */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="p-3 bg-white rounded-xl border border-border shadow-md">
                <img
                  src={apkQrUrl}
                  alt="Scan to download APK"
                  className="w-[150px] h-[150px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.innerHTML =
                      '<div class="w-[150px] h-[150px] flex items-center justify-center text-xs text-gray-400 text-center p-4">QR unavailable</div>';
                  }}
                />
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <QrCode className="h-3 w-3" />
                Scan to download APK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallAppBanner;
