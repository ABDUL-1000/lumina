import { Button } from "@/components/ui/button"
import { Heart, MoreHorizontal, Wallet } from "lucide-react"

export function GalleryFooter() {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Liked
            </Button>
            <Button variant="ghost" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              Pricing
            </Button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">K</span>
            </div>
            <span className="font-medium">Krea AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">curated by</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-xs">M</span>
              </div>
              <span className="font-medium">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
