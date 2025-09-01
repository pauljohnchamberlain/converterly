# Changelog

All notable changes to this project will be documented in this file.

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