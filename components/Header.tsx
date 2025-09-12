"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, Search, Bookmark, User, Settings, HelpCircle, FolderArchive, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <>
      <header className="w-full border-b sticky top-0 z-50 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">krea.ai/community</span>
          </div>

          {/* Center - Navigation Icons (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Home className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <FolderArchive className="h-4 w-4" />
            </Button>
          </div>

          {/* Right side - User actions (partially hidden on mobile) */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden lg:inline">Gallery</span>
            <span className="text-sm text-muted-foreground hidden md:inline">Support</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hidden md:flex">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hidden md:flex">
              <span className="text-primary-foreground text-xs font-medium">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed right-0 top-14 h-full w-64 bg-background border-l border-border shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-medium">U</span>
                </div>
                <div>
                  <p className="text-sm font-medium">User Account</p>
                  <p className="text-xs text-muted-foreground">krea.ai/community</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">Navigation</h3>
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" className="justify-start">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Bookmarks
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <FolderArchive className="h-4 w-4 mr-2" />
                    Archives
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">Resources</h3>
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" className="justify-start">
                    Gallery
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Support
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <Button 
                  variant="ghost" 
                  className="justify-start w-full"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}