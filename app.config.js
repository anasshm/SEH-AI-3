module.exports = {
  expo: {
    name: "foodnsap",
    slug: "foodnsap",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router"
    ],
    extra: {
      // Using the API key from .env file
      openaiApiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
      supabaseUrl: "https://zytvlzdocsiqnyhjhcbs.supabase.co",
      supabaseAnon: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dHZsemRvY3NpcW55aGpoY2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTc5NzUsImV4cCI6MjA2MTM3Mzk3NX0.QqNoGgZEZhwmFj6CegGI2nf__FiKeWhVcLyPDItP_XE",
      eas: {
        projectId: "your-project-id"
      }
    }
  }
};