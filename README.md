# TuneFlow

TuneFlow is a modern music streaming web application built with Next.js that leverages the JioSaavn API to provide a seamless music listening experience.

## Features

- 🎵 Stream songs, albums, and playlists
- 🔍 Search for your favorite music
- 👨‍🎤 Browse artists and their discographies
- 📱 Responsive design for all devices
- 🎛️ Full-featured music player with controls
- 🆕 Discover latest and trending music

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **API**: JioSaavn API (unofficial)
- **Styling**: Tailwind CSS with custom components
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tuneflow.git
   cd tuneflow
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_API_URL='https://jiosaavn-api-sigma-rouge.vercel.app/api/'
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```

## API Integration

TuneFlow uses the unofficial JioSaavn API for fetching music data. The API provides endpoints for:

- Fetching songs, albums, and playlists
- Searching for music
- Getting artist information
- Retrieving trending and latest releases

## Deployment

The application can be deployed on Vercel or any other platform that supports Next.js:

```bash
npm run build
# or
yarn build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [JioSaavn API](https://github.com/sumitkolhe/jiosaavn-api) by Sumit Kolhe
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
