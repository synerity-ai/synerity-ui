# Publishing Guide for @synerity/ui

This guide explains how to publish the @synerity/ui Angular library to npm and deploy the demo app to GitHub Pages.

## 📋 Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **NPM Token**: Generate an access token with publish permissions
3. **GitHub Repository**: Ensure the repository is set up with proper permissions

## 🚀 Publishing Steps

### 1. Setup NPM Authentication

```bash
# Login to npm (if not already logged in)
npm login

# Or use token authentication
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN
```

### 2. Configure GitHub Secrets

Add these secrets to your GitHub repository:

- `NPM_TOKEN`: Your npm access token for publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub

### 3. Build and Test

```bash
# Install dependencies
npm ci

# Build the library
npm run build:lib

# Test the build
npm run build:demo
```

### 4. Manual Publishing (Optional)

```bash
# Build the library
npm run build:lib

# Publish to npm
npm run publish:lib
```

### 5. Automated Publishing

The library will be automatically published when you:

1. **Create a Git tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Or trigger manually** via GitHub Actions workflow

## 🌐 GitHub Pages Deployment

The demo app will be automatically deployed to GitHub Pages when you push to the main branch.

### Manual Deployment

```bash
# Build the demo app
npm run build:demo

# The build output will be in dist/demo-app/browser/
# GitHub Actions will handle the deployment
```

### Accessing the Demo

Once deployed, your demo will be available at:
`https://synerity-ai.github.io/synerity-ui/`

## 📦 Package Structure

The published package will include:

```
@synerity/ui/
├── fesm2022/          # ES2022 modules
├── esm2022/           # ES modules
├── index.d.ts         # TypeScript definitions
├── package.json       # Package metadata
└── README.md          # Documentation
```

## 🔧 Configuration Files

### package.json (ui-lib)
- Package name: `@synerity/ui`
- Version: Semantic versioning
- Peer dependencies: Angular 17+
- Exports: Modern ES modules

### ng-package.json
- Build configuration for ng-packagr
- Output directory: `dist/ui-lib`

### GitHub Actions
- `publish.yml`: Automated npm publishing
- `deploy-demo.yml`: GitHub Pages deployment

## 📝 Version Management

### Semantic Versioning

- **Major** (1.0.0): Breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Patch** (1.0.1): Bug fixes, backward compatible

### Release Process

1. Update version in `projects/ui-lib/package.json`
2. Update CHANGELOG.md
3. Create git tag: `git tag v1.0.0`
4. Push tag: `git push origin v1.0.0`
5. GitHub Actions will handle the rest

## 🎯 Post-Publishing

### 1. Update NPM Package Description

After publishing, update the npm package description to include:
- Link to GitHub Pages demo
- Component count and features
- Usage examples

### 2. Documentation

- Ensure README.md is comprehensive
- Add component examples
- Include installation instructions
- Link to live demo

### 3. Community

- Share on social media
- Post in Angular communities
- Create tutorials and examples

## 🔍 Verification

After publishing, verify:

1. **NPM Package**: Check [npmjs.com/package/@synerity/ui](https://www.npmjs.com/package/@synerity/ui)
2. **Demo Site**: Visit GitHub Pages URL
3. **Installation**: Test in a new Angular project
4. **Components**: Verify all 90+ components work

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**: Check Angular version compatibility
2. **Publish Errors**: Verify NPM token permissions
3. **GitHub Pages**: Check repository settings and secrets
4. **Import Errors**: Verify package.json exports

### Support

- GitHub Issues: [Create an issue](https://github.com/synerity-ai/synerity-ui/issues)
- Documentation: Check README.md and component docs
- Community: Join Angular Discord/Slack channels

## 📊 Analytics

Track package usage:

- NPM download statistics
- GitHub repository stars/forks
- Demo site analytics
- Community feedback

---

**Happy Publishing! 🚀**
