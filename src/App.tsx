"use client"

import type React from "react"
import { useEffect, useState } from "react"
import "./App.css"

// Simple Card components
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`card ${className}`}>{children}</div>
)

const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="card-header">{children}</div>

const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`card-title ${className}`}>{children}</h2>
)

const CardDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`card-description ${className}`}>{children}</p>
)

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`card-content ${className}`}>{children}</div>
)

// Alert/Notification component
const Alert = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "success" }) => (
  <div className={`alert alert-${type}`}>{children}</div>
)

// Button component
const Button = ({
  children,
  onClick,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode
  onClick: () => void
  className?: string
  disabled?: boolean
}) => (
  <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

// Simple icons as SVG components
const Youtube = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const LinkIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const ExternalLink = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const Gift = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,12 20,22 4,22 4,12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

const Bell = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const CheckCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

export default function App() {
  const [showContent, setShowContent] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [checkingSubscription, setCheckingSubscription] = useState(false)
  const [showNotification, setShowNotification] = useState(true)

  // Your content data
  const contentData = {
    mainLink: "https://www.mediafire.com/file/yfqpymzq1hcq7bm/Duolingo+Max+v6.36.0+@VictorRaulRR.apk/file",
    backupLink: "https://send.now/thgwggg5zp8d",
    title: "🎉 Exclusive Content Unlocked!",
    description: "Thank you for subscribing! Here are your exclusive download links:",
  }

  useEffect(() => {
    // Load Google APIs script
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/platform.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://apis.google.com/js/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const handleGetContent = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    if (newClickCount === 1) {
      // First click - show "please subscribe" message
      setShowNotification(true)
    } else if (newClickCount >= 2) {
      // Second click - pretend to check subscription and show content
      setCheckingSubscription(true)
      setShowNotification(false)

      setTimeout(() => {
        setIsSubscribed(true)
        setCheckingSubscription(false)
        setTimeout(() => {
          setShowContent(true)
        }, 1000)
      }, 2500)
    }
  }

  const dismissNotification = () => {
    setShowNotification(false)
  }

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-title">
            <Youtube className="youtube-icon" />
            <h1>Get Exclusive Premium Content</h1>
          </div>
          <p className="header-description">
            Subscribe to our YouTube channel and unlock exclusive premium downloads and resources!
          </p>
        </header>

        {/* Notification Alert */}
        {showNotification && clickCount > 0 && !isSubscribed && (
          <Alert type="warning">
            <div className="notification-content">
              <Bell className="notification-icon" />
              <div className="notification-text">
                <strong>Please Subscribe First!</strong>
                <p>
                  You need to subscribe to our YouTube channel before accessing the exclusive content. Click the red
                  subscribe button above, then try again.
                </p>
              </div>
              <button className="notification-close" onClick={dismissNotification}>
                ×
              </button>
            </div>
          </Alert>
        )}

        {/* Success Notification */}
        {isSubscribed && !showContent && (
          <Alert type="success">
            <div className="notification-content">
              <CheckCircle className="notification-icon" />
              <div className="notification-text">
                <strong>Subscription Verified!</strong>
                <p>Great! Your subscription has been confirmed. Preparing your exclusive content...</p>
              </div>
            </div>
          </Alert>
        )}

        {/* YouTube Subscribe Button */}
        {!showContent && (
          <Card className="subscribe-card">
            <CardHeader>
              <CardTitle className="subscribe-title">
                <Youtube className="youtube-icon-small" />
                Step 1: Subscribe to Our Channel
              </CardTitle>
              <CardDescription>Click the YouTube subscribe button below to get started</CardDescription>
            </CardHeader>
            <CardContent className="subscribe-content">
              {/* Add the standard YouTube button for desktop */}
              <div
                className="g-ytsubscribe desktop-only"
                data-channelid="UCNBSdTuTvd3YyD8H3VAgUfA"
                data-layout="full"
                data-count="default"
              ></div>
              
              {/* Add direct link for mobile fallback */}
              <a 
                href="https://www.youtube.com/channel/UCNBSdTuTvd3YyD8H3VAgUfA?sub_confirmation=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-subscribe-button"
              >
                <Youtube className="youtube-icon-small" />
                Subscribe to Channel
              </a>
            </CardContent>
          </Card>
        )}

        {/* Get Content Button */}
        {!showContent && (
          <Card className="content-button-card">
            <CardHeader>
              <CardTitle className="content-button-title">
                <Gift className="gift-icon" />
                Step 2: Access Your Exclusive Content
              </CardTitle>
              <CardDescription>
                {checkingSubscription
                  ? "Verifying your subscription status..."
                  : isSubscribed
                    ? "Preparing your exclusive downloads..."
                    : "Click below to access your premium content"}
              </CardDescription>
            </CardHeader>
            <CardContent className="content-button-content">
              <Button
                onClick={handleGetContent}
                disabled={checkingSubscription}
                className={`get-content-button ${isSubscribed ? "verified" : "default"}`}
              >
                {checkingSubscription ? (
                  <>
                    <div className="spinner"></div>
                    Verifying Subscription...
                  </>
                ) : isSubscribed ? (
                  <>
                    <CheckCircle className="button-icon" />
                    Preparing Content...
                  </>
                ) : (
                  <>
                    <Gift className="button-icon" />
                    Get My Premium Content
                  </>
                )}
              </Button>
              {clickCount > 0 && !isSubscribed && !checkingSubscription && (
                <p className="click-hint">{clickCount === 1 ? "Please subscribe first, then click again!" : ""}</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Content - Show when verification is complete */}
        {showContent && (
          <Card className="content-card">
            <CardHeader>
              <CardTitle className="content-title">
                <LinkIcon className="link-icon" />
                {contentData.title}
              </CardTitle>
              <CardDescription className="content-description">{contentData.description}</CardDescription>
            </CardHeader>
            <CardContent className="content-body">
              {/* Main Link */}
              <div className="link-container primary">
                <div className="link-header">
                  <h3 className="link-title">🔥 Primary Download Link</h3>
                  <span className="link-badge">Recommended</span>
                </div>
                <a href={contentData.mainLink} target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="external-icon" />
                  <span className="link-text">MediaFire - Duolingo Max v6.36.0</span>
                </a>
              </div>

              {/* Backup Link */}
              <div className="link-container backup">
                <div className="link-header">
                  <h3 className="link-title">💾 Backup Download Link</h3>
                  <span className="link-badge backup">Alternative</span>
                </div>
                <a href={contentData.backupLink} target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="external-icon" />
                  <span className="link-text">Send.now - Alternative Download</span>
                </a>
              </div>

              {/* Success Message */}
              <div className="success-message">
                <div className="success-content">
                  <CheckCircle className="success-icon" />
                  <div>
                    <h4>Thank you for subscribing!</h4>
                    <p>
                      These exclusive links give you access to premium content. If one link doesn't work, try the backup
                      link. Don't forget to like our videos and turn on notifications!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
