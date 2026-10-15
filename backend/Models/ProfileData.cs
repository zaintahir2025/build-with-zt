namespace BuildWithZT.Api.Models;

public class ProfileData
{
    public string Name { get; set; } = "Zain Tahir";
    public string Brand { get; set; } = "Build With ZT";
    public string Tagline { get; set; } = "Engineering High-Performance Apps & Scalable Web Solutions That Drive Business Growth";
    public string Headline { get; set; } = "Specialized Flutter Developer, Full-Lifecycle Product Engineer & Web Designer";
    public string AboutSummary { get; set; } = "I build high-performance, cross-platform applications that drive real business growth. As a specialized Flutter Developer, I help entrepreneurs and businesses launch faster and cut development costs by utilizing a single, highly optimized codebase without ever sacrificing native quality. Whether you need a lightning-fast MVP to secure funding or a robust, scalable platform to expand your operations, I engineer secure, offline-first architectures using tools like Supabase, Firebase, and Hive. I thrive on integrating complex, standout features—from low-latency WebRTC communication and dynamic routing to automated analytics—delivering a flawless, market-ready product that perfectly aligns with your strategic goals.";
    public string Location { get; set; } = "UET Taxila / Islamabad, Pakistan";
    public string Education { get; set; } = "Department of Computer Science, University of Engineering and Technology (UET) Taxila";
    public string Email { get; set; } = "zaintahir.dev@gmail.com";
    public string GitHubUrl { get; set; } = "https://github.com/zaintahir2025";
    public string LinkedInUrl { get; set; } = "https://www.linkedin.com/in/zain-tahir-2k25";
    public string AvatarUrl { get; set; } = "https://avatars.githubusercontent.com/u/201891321?v=4";
    public bool AvailableForHire { get; set; } = true;
    public Dictionary<string, string> KeyMetrics { get; set; } = new()
    {
        { "Repositories", "9+" },
        { "Platform Efficiency", "100%" },
        { "Architecture", "Offline-1st" },
        { "Performance", "60/120 FPS" }
    };
}
