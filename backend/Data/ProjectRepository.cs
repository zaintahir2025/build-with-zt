using BuildWithZT.Api.Models;

namespace BuildWithZT.Api.Data;

public static class ProjectRepository
{
    private static readonly List<ProjectItem> Projects = new()
    {
        new ProjectItem
        {
            Id = "voxora",
            Name = "voxora-social-voice-chat",
            Title = "Voxora: Social Voice & Gaming Platform",
            Description = "Next-gen cross-platform social networking app merging flat-design feeds, low-latency peer-to-peer WebRTC voice calling, and integrated AI-driven multiplayer games.",
            DetailedOverview = "Built from the ground up using Flutter and Supabase. Merges real-time social feeds, zero-lag WebRTC voice calling channels, and interactive AI mini-games in voice rooms with a 60 FPS responsive UI.",
            Category = "Flutter & WebRTC",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/voxora-social-voice-chat",
            LiveDemoUrl = "https://zaintahir2025.github.io/voxora-social-voice-chat/",
            TechStack = new() { "Flutter", "Supabase", "WebRTC", "Riverpod", "GitHub Pages" },
            Highlights = new()
            {
                "Peer-to-peer WebRTC audio streaming with room bridging",
                "Real-time presence and pub/sub feeds via Supabase",
                "AI-driven multiplayer mini-game logic",
                "Live Web & Mobile responsive execution"
            },
            Icon = "🌊",
            Gradient = "teal"
        },
        new ProjectItem
        {
            Id = "lingu_ai",
            Name = "lingu_ai",
            Title = "LinguAI: Enterprise Gamified AI Language Platform",
            Description = "Enterprise-grade language learning system engineered with Flutter and Dart Serverpod, featuring Google Gemini conversational AI tutoring and SuperMemo (SM-2) spaced repetition.",
            DetailedOverview = "Integrates SM-2 algorithmic memory retention scheduling, contextual real-time Gemini AI chat feedback, native speech synthesis, bi-directional English/Urdu localization, JWT token rotation, and Stripe monetization.",
            Category = "AI & EdTech",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/lingu_ai",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "Serverpod", "Gemini API", "Stripe", "SM-2 Algorithm" },
            Highlights = new()
            {
                "SuperMemo (SM-2) spaced repetition algorithm for cognitive retention",
                "Google Gemini REST API dynamic conversational practice",
                "Bi-directional localization with English & Urdu support",
                "Secure JWT token rotation and server-verified payments"
            },
            Icon = "🧠",
            Gradient = "blue"
        },
        new ProjectItem
        {
            Id = "ustaad",
            Name = "ustaad-agentic-service-app",
            Title = "Ustaad: Service-Booking Platform",
            Description = "Production-minded service-booking application empowering Pakistan's informal skilled economy with automated Flutter CI/CD pipelines.",
            DetailedOverview = "Connects informal skilled technicians (electricians, plumbers, repairmen) with on-demand consumers. Built with automated GitHub Actions CI/CD workflows and responsive cross-platform layout.",
            Category = "Flutter & Marketplace",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/ustaad-agentic-service-app",
            LiveDemoUrl = "https://zaintahir2025.github.io/ustaad-agentic-service-app/",
            TechStack = new() { "Flutter", "GitHub Actions", "CI/CD", "Responsive Web" },
            Highlights = new()
            {
                "Production on-demand booking architecture",
                "Automated Flutter CI/CD pipeline deploying to GitHub Pages",
                "Adaptive UI scaling across phones, tablets, and desktops",
                "Optimized frictionless user onboarding"
            },
            Icon = "🛠️",
            Gradient = "orange"
        },
        new ProjectItem
        {
            Id = "budget_os",
            Name = "budget-os-app",
            Title = "Budget OS: Scalable Personal Finance",
            Description = "High-performance personal finance app utilizing a hybrid database: ultra-fast local Hive storage backed by Cloud Firestore synchronization and heuristic spending analysis.",
            DetailedOverview = "Eliminates network latency with local Hive caching while preserving real-time multi-device cloud synchronization via Firebase. Includes a custom financial decision engine and encrypted PDF generation.",
            Category = "FinTech & Offline-First",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/budget-os-app",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "Hive DB", "Firebase Firestore", "PDF Generation" },
            Highlights = new()
            {
                "Sub-millisecond local reads/writes via Hive",
                "Background cloud sync with Cloud Firestore",
                "Custom heuristic spending analysis engine",
                "Encrypted PDF export for financial records"
            },
            Icon = "💰",
            Gradient = "purple"
        },
        new ProjectItem
        {
            Id = "embrace",
            Name = "embrace-app",
            Title = "Embrace: Biometric Journaling & Wellness",
            Description = "Privacy-focused mental wellness journal combining biometric security, emotional insight analytics, contribution heatmap visualizations, and an offline-first Material 3 UI.",
            DetailedOverview = "Engineered with zero-knowledge local encryption, fingerprint/face recognition authentication, mood analytics, git-style calendar heatmaps, and a refined Material 3 aesthetic.",
            Category = "Mobile & Security",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/embrace-app",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "Biometric Auth", "Material 3", "Heatmaps" },
            Highlights = new()
            {
                "Local biometric hardware security integration",
                "Interactive habit and mood heatmaps",
                "Material 3 dynamic color palettes and fluid animations",
                "Offline-first architecture with zero cloud leak"
            },
            Icon = "🌿",
            Gradient = "pink"
        },
        new ProjectItem
        {
            Id = "retail_analytics",
            Name = "enterprise-retail-analytics-engine",
            Title = "Enterprise Retail Analytics Engine",
            Description = "High-scale retail intelligence engine combining Flask API, automated dbt data modeling pipelines, Snowflake warehouse integration, and Google Gemini insights.",
            DetailedOverview = "Full-stack enterprise data pipeline extracting and transforming transactional datasets using dbt over Snowflake, serving aggregated metrics through Flask, with GenAI sales trend summaries.",
            Category = "Data & Enterprise",
            Language = "Python",
            HtmlUrl = "https://github.com/zaintahir2025/enterprise-retail-analytics-engine",
            LiveDemoUrl = null,
            TechStack = new() { "Python", "Flask", "dbt", "Snowflake", "Gemini AI" },
            Highlights = new()
            {
                "dbt transformation models over Snowflake Cloud Warehouse",
                "High-throughput Flask REST API",
                "Generative sales analytics powered by Google Gemini",
                "Automated reporting dashboard on GitHub Pages"
            },
            Icon = "📊",
            Gradient = "cyan"
        },
        new ProjectItem
        {
            Id = "cgpa",
            Name = "cgpa-calculator",
            Title = "CGPA Calculator & Forecasting Suite",
            Description = "Cross-platform application (Mobile, Web, Desktop) featuring mathematical GPA predictive algorithms, responsive masonry layouts, and fl_chart visual analytics.",
            DetailedOverview = "Helps university students analyze and forecast academic outcomes. Features multi-semester scenario planning, transcript generation, and fluid layout adaptation.",
            Category = "Flutter & Analytics",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/cgpa-calculator",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "fl_chart", "Masonry UI", "PDF Export" },
            Highlights = new()
            {
                "Mathematical grade projection algorithm",
                "fl_chart interactive performance graphs",
                "Adaptive masonry layout across screen sizes",
                "Formal PDF academic transcript export"
            },
            Icon = "🎓",
            Gradient = "amber"
        },
        new ProjectItem
        {
            Id = "blog_app",
            Name = "blog_app",
            Title = "Cross-Platform Reader & Publishing App",
            Description = "Production-grade publishing app demonstrating immutable reactive state architecture with Riverpod, instant dark/light theming, and social reading engagement feeds.",
            DetailedOverview = "Engineered with strict Clean Architecture separation, Riverpod state management, post authoring, bookmarks, reading history tracking, and responsive typography.",
            Category = "Flutter & Riverpod",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/blog_app",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "Riverpod", "Material UI", "Local Storage" },
            Highlights = new()
            {
                "Riverpod predictable state orchestration",
                "Adaptive dark/light theme switching",
                "Reading activity and bookmarking persistence",
                "Responsive text composition layout"
            },
            Icon = "📝",
            Gradient = "indigo"
        },
        new ProjectItem
        {
            Id = "hangman",
            Name = "hangman-pro",
            Title = "Hangman Pro: High-Performance Game",
            Description = "High-performance interactive application highlighting custom programmatic 2D vector drawing, responsive layout scaling, and deterministic state transitions.",
            DetailedOverview = "Showcases Flutter's rendering pipeline using CustomPainter for 100% programmatic 2D graphics without heavy sprite assets, delivering 60 FPS across devices.",
            Category = "Flutter & Graphics",
            Language = "Dart",
            HtmlUrl = "https://github.com/zaintahir2025/hangman-pro",
            LiveDemoUrl = null,
            TechStack = new() { "Flutter", "CustomPainter", "AnimationControllers", "Clean Architecture" },
            Highlights = new()
            {
                "Programmatic 2D vector drawing with CustomPainter",
                "Smooth 60 FPS physics and transitions",
                "Deterministic game state logic",
                "Zero third-party asset bloat"
            },
            Icon = "🎯",
            Gradient = "emerald"
        }
    };

    public static List<ProjectItem> GetAll() => Projects;

    public static ProjectItem? GetById(string id) =>
        Projects.FirstOrDefault(p => p.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
}
