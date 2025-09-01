# Changelog

All notable changes to this project will be documented in this file.

## [0.1.2] - 2025-01-09

### Fixed
- **Critical GTM Detection Issue**: Resolved dataLayer conflicts between Google Analytics and Google Tag Manager
- **Tag Assistant Compatibility**: Fixed GTM detection by removing conflicting GA component that interfered with GTM initialization
- **SPA Navigation Tracking**: Added proper page view tracking for client-side navigation with GTMPageView component
- **SSG Build Issues**: Fixed Suspense boundary implementation to prevent build failures
- **Analytics Architecture**: Eliminated dual script loading (gtag.js + GTM) in favor of single GTM implementation

### Removed
- **Conflicting GA Component**: Removed components/GA.tsx that was causing dataLayer conflicts with GTM

### Added
- **GTMPageView Component**: New component for tracking SPA navigation events with proper Suspense boundaries

### Technical Details
- Eliminated competing dataLayer initializations that prevented Tag Assistant detection
- Migrated from dual analytics approach to GTM-only implementation
- Enhanced client-side navigation tracking with sendGTMEvent integration
- Improved build compatibility with proper async component handling

## [0.1.1] - 2025-01-09

### Fixed
- **Google Tag Manager Integration**: Fixed GTM implementation to be properly detected by Google Tag Assistant
- **Performance**: Replaced custom GTM component with official @next/third-parties package for optimized script loading
- **HTML Structure**: Fixed invalid HTML structure by properly placing GTM components
- **Dependencies**: Added @next/third-parties@15.5.2 for official GTM support

### Removed  
- **Custom GTM Component**: Removed components/GTM.tsx in favor of official implementation

### Technical Details
- Migrated from custom GTM script injection to @next/third-parties/google GoogleTagManager component
- Improved Core Web Vitals by using optimized script loading strategies
- Enhanced debugging capabilities with better Tag Assistant compatibility