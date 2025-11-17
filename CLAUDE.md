# CLAUDE.md - YouTube Automation Project

## Project Overview

This is a YouTube automation project designed to streamline video creation, uploading, and management workflows. This document provides AI assistants with essential context about the codebase structure, development workflows, and key conventions.

## Project Status

**Current State:** Initial setup phase - repository is brand new

## Recommended Project Structure

```
youtube-automation/
├── .env.example              # Environment variable template
├── .env                      # Local environment variables (gitignored)
├── .gitignore               # Git ignore patterns
├── package.json             # Node.js dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # User-facing documentation
├── CLAUDE.md                # This file - AI assistant context
│
├── src/                     # Source code
│   ├── index.ts            # Main entry point
│   ├── config/             # Configuration management
│   │   ├── youtube.ts      # YouTube API configuration
│   │   └── env.ts          # Environment variable validation
│   │
│   ├── services/           # Business logic and API integrations
│   │   ├── youtube/        # YouTube-specific services
│   │   │   ├── upload.ts   # Video upload functionality
│   │   │   ├── metadata.ts # Title, description, tags management
│   │   │   └── analytics.ts # Analytics and metrics
│   │   ├── video/          # Video processing services
│   │   │   ├── render.ts   # Video rendering/generation
│   │   │   ├── edit.ts     # Video editing automation
│   │   │   └── thumbnail.ts # Thumbnail generation
│   │   └── content/        # Content generation
│   │       ├── script.ts   # Script generation
│   │       └── voiceover.ts # Text-to-speech/voiceover
│   │
│   ├── utils/              # Utility functions
│   │   ├── logger.ts       # Logging utilities
│   │   ├── retry.ts        # Retry logic for API calls
│   │   └── validation.ts   # Input validation helpers
│   │
│   ├── types/              # TypeScript type definitions
│   │   ├── youtube.ts      # YouTube-related types
│   │   └── video.ts        # Video-related types
│   │
│   └── workflows/          # Automation workflows
│       ├── daily-upload.ts # Daily video upload workflow
│       └── batch-process.ts # Batch processing workflow
│
├── tests/                  # Test files
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── fixtures/          # Test data and fixtures
│
├── scripts/               # Utility scripts
│   ├── setup.sh          # Initial setup script
│   └── deploy.sh         # Deployment script
│
├── data/                  # Data storage (gitignored)
│   ├── videos/           # Video files
│   ├── thumbnails/       # Thumbnail images
│   └── transcripts/      # Video transcripts
│
└── docs/                  # Additional documentation
    ├── API.md            # API documentation
    └── WORKFLOWS.md      # Workflow documentation
```

## Technology Stack Recommendations

### Core Technologies
- **Runtime:** Node.js (v18+ or v20+)
- **Language:** TypeScript (for type safety)
- **Package Manager:** npm or pnpm

### Key Libraries to Consider
- **YouTube API:** `googleapis` - Official Google APIs client
- **Video Processing:** `ffmpeg` via `fluent-ffmpeg` - Video manipulation
- **Task Scheduling:** `node-cron` or `bull` - Job scheduling
- **Environment Management:** `dotenv` - Environment variables
- **Logging:** `winston` or `pino` - Structured logging
- **Validation:** `zod` or `joi` - Schema validation
- **Testing:** `jest` or `vitest` - Testing framework
- **HTTP Client:** `axios` - API requests

## Development Workflows

### Initial Setup

When setting up the project for the first time:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with actual credentials
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

### Development Workflow

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Run linter:**
   ```bash
   npm run lint
   ```

3. **Format code:**
   ```bash
   npm run format
   ```

### Testing Strategy

- **Unit Tests:** Test individual functions and modules
- **Integration Tests:** Test API integrations and workflows
- **Mock External APIs:** Use mocks for YouTube API during testing
- **Test Coverage:** Aim for 80%+ coverage on critical paths

## Key Conventions and Best Practices

### Code Style

1. **TypeScript First:** Always use TypeScript with strict mode enabled
2. **Async/Await:** Prefer async/await over callbacks or raw promises
3. **Error Handling:** Use try-catch blocks and proper error logging
4. **Naming Conventions:**
   - Files: `kebab-case.ts`
   - Classes: `PascalCase`
   - Functions/Variables: `camelCase`
   - Constants: `UPPER_SNAKE_CASE`

### API Integration

1. **Rate Limiting:** Implement rate limiting for YouTube API calls
2. **Retry Logic:** Add exponential backoff for failed requests
3. **Quota Management:** Monitor and manage YouTube API quota usage
4. **Error Recovery:** Gracefully handle API errors and network issues

### Security Best Practices

1. **Never Commit Secrets:** Use `.env` files (gitignored) for sensitive data
2. **API Key Management:**
   - Store YouTube API credentials in environment variables
   - Use OAuth 2.0 for user authentication
   - Rotate credentials regularly
3. **Validate Inputs:** Sanitize all user inputs and file uploads
4. **Secure Storage:** Encrypt sensitive data at rest

### Environment Variables

Required environment variables:

```bash
# YouTube API
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_CLIENT_ID=your_client_id
YOUTUBE_CLIENT_SECRET=your_client_secret
YOUTUBE_REDIRECT_URI=your_redirect_uri

# Application Settings
NODE_ENV=development
LOG_LEVEL=info
UPLOAD_SCHEDULE=0 9 * * *  # Cron expression for daily 9 AM

# File Paths
VIDEO_STORAGE_PATH=./data/videos
THUMBNAIL_STORAGE_PATH=./data/thumbnails

# Optional Integrations
OPENAI_API_KEY=your_openai_key  # For content generation
```

## Common Tasks

### Uploading a Video

```typescript
import { uploadVideo } from './services/youtube/upload';

const result = await uploadVideo({
  filePath: './data/videos/my-video.mp4',
  title: 'My Video Title',
  description: 'Video description',
  tags: ['tag1', 'tag2'],
  privacyStatus: 'public'
});
```

### Generating Thumbnails

```typescript
import { generateThumbnail } from './services/video/thumbnail';

const thumbnailPath = await generateThumbnail({
  videoPath: './data/videos/my-video.mp4',
  timestamp: '00:00:05',
  outputPath: './data/thumbnails/thumbnail.jpg'
});
```

### Scheduling Uploads

```typescript
import cron from 'node-cron';
import { dailyUploadWorkflow } from './workflows/daily-upload';

// Schedule daily upload at 9 AM
cron.schedule('0 9 * * *', async () => {
  await dailyUploadWorkflow();
});
```

## File Organization Principles

1. **Separation of Concerns:** Keep services, utilities, and workflows separate
2. **Single Responsibility:** Each module should have one clear purpose
3. **Dependency Injection:** Use dependency injection for better testability
4. **Configuration Management:** Centralize configuration in `config/` directory

## Git Workflow

### Branch Naming
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Claude AI branches: `claude/*` (auto-generated)

### Commit Messages
Follow conventional commits:
- `feat: add video upload functionality`
- `fix: resolve thumbnail generation error`
- `docs: update API documentation`
- `refactor: restructure service layer`
- `test: add integration tests for upload`

## Error Handling Strategy

1. **Custom Error Classes:** Define specific error types
   ```typescript
   class YouTubeAPIError extends Error {
     constructor(message: string, public statusCode: number) {
       super(message);
       this.name = 'YouTubeAPIError';
     }
   }
   ```

2. **Centralized Error Logging:** Log all errors with context
3. **Graceful Degradation:** Provide fallbacks when services fail
4. **User-Friendly Messages:** Return clear error messages to users

## Logging Standards

Use structured logging with appropriate levels:

```typescript
logger.info('Starting video upload', { videoId, title });
logger.warn('API quota low', { remaining: quota.remaining });
logger.error('Upload failed', { error, videoId });
logger.debug('Processing frame', { frameNumber, timestamp });
```

## Performance Considerations

1. **Video Processing:** Use streams for large video files
2. **Parallel Processing:** Process multiple videos concurrently when possible
3. **Caching:** Cache API responses where appropriate
4. **Resource Cleanup:** Always clean up temporary files and resources

## Testing Guidelines

### Unit Tests
```typescript
describe('uploadVideo', () => {
  it('should upload video with correct metadata', async () => {
    // Test implementation
  });

  it('should handle upload failures gracefully', async () => {
    // Test error handling
  });
});
```

### Integration Tests
```typescript
describe('YouTube Integration', () => {
  it('should authenticate and upload video end-to-end', async () => {
    // Full workflow test
  });
});
```

## AI Assistant Guidelines

When working on this project, AI assistants should:

1. **Understand Context:** Review this file before making changes
2. **Follow Conventions:** Adhere to the coding standards outlined above
3. **Security First:** Never expose API keys or sensitive data
4. **Test Coverage:** Write tests for new functionality
5. **Documentation:** Update docs when adding features
6. **Error Handling:** Always implement proper error handling
7. **Type Safety:** Leverage TypeScript's type system fully
8. **Ask Questions:** Request clarification for ambiguous requirements
9. **Incremental Changes:** Make small, focused commits
10. **Review Existing Code:** Check for similar patterns before implementing

## Common Pitfalls to Avoid

1. **Rate Limiting:** Don't exceed YouTube API quota limits
2. **Memory Leaks:** Always clean up video processing resources
3. **Hardcoded Values:** Use environment variables for configuration
4. **Blocking Operations:** Use async operations for I/O
5. **Large Files in Git:** Never commit video files or credentials
6. **Unhandled Promises:** Always handle promise rejections

## Future Enhancements

Consider these features for future development:

- [ ] Automatic content generation using AI
- [ ] Analytics dashboard for video performance
- [ ] Multi-channel support
- [ ] Automated thumbnail A/B testing
- [ ] Social media cross-posting
- [ ] Video SEO optimization
- [ ] Scheduled publishing queue
- [ ] Webhook integrations
- [ ] Mobile app for monitoring

## Resources

### YouTube API Documentation
- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [Upload Videos](https://developers.google.com/youtube/v3/guides/uploading_a_video)
- [API Quotas](https://developers.google.com/youtube/v3/getting-started#quota)

### Video Processing
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [fluent-ffmpeg Guide](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

### Best Practices
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [TypeScript Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

## Support and Contributing

When contributing to this project:

1. Read this CLAUDE.md file thoroughly
2. Follow the established patterns and conventions
3. Write clear commit messages
4. Add tests for new features
5. Update documentation as needed
6. Request code review before merging

## Version History

- **v0.1.0** (2025-11-17): Initial CLAUDE.md creation - project setup phase

---

**Last Updated:** 2025-11-17
**Maintained By:** AI Assistant (Claude)
**Project Type:** YouTube Automation Platform
