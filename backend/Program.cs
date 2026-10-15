using BuildWithZT.Api.Data;
using BuildWithZT.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure CORS for Flutter Web application
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseDefaultFiles();
app.UseStaticFiles();

// --------------------------------------------------------------------------
// Health & Diagnostic Endpoint
// --------------------------------------------------------------------------
app.MapGet("/health", () => Results.Ok(new
{
    Status = "Healthy",
    Application = "Build With ZT - C# API",
    Version = "1.0.0",
    Timestamp = DateTime.UtcNow
}));

// --------------------------------------------------------------------------
// Profile Endpoint
// --------------------------------------------------------------------------
app.MapGet("/api/profile", () => Results.Ok(new ProfileData()));

// --------------------------------------------------------------------------
// Projects Endpoints (9 Repositories, excluding pantry_ai)
// --------------------------------------------------------------------------
app.MapGet("/api/projects", (string? category) =>
{
    var projects = ProjectRepository.GetAll();
    if (!string.IsNullOrWhiteSpace(category) && !category.Equals("all", StringComparison.OrdinalIgnoreCase))
    {
        projects = projects
            .Where(p => p.Category.Contains(category, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }
    return Results.Ok(projects);
});

app.MapGet("/api/projects/{id}", (string id) =>
{
    var project = ProjectRepository.GetById(id);
    return project is not null ? Results.Ok(project) : Results.NotFound(new { Message = $"Project '{id}' not found." });
});

// --------------------------------------------------------------------------
// Services Endpoint
// --------------------------------------------------------------------------
app.MapGet("/api/services", () => Results.Ok(new[]
{
    new
    {
        Id = "mvp-engineering",
        Title = "Rapid MVP Engineering for Startups",
        Badge = "01",
        Description = "Launch an investor-ready, multi-platform MVP (iOS, Android, Web) in 3–6 weeks using a single, optimized Flutter codebase.",
        Deliverables = new[]
        {
            "Complete cross-platform codebase (iOS, Android, Web)",
            "Offline-first local cache & cloud sync (Supabase/Firebase)",
            "User authentication, role-based security & payment flows",
            "Investor pitch demo readiness"
        }
    },
    new
    {
        Id = "app-modernization",
        Title = "Flutter App Performance Tuning & Architecture Audit",
        Badge = "02",
        Description = "Turn sluggish, laggy mobile applications into stutter-free 60/120fps powerhouses with clean Riverpod/Bloc patterns.",
        Deliverables = new[]
        {
            "Comprehensive architectural and performance bottleneck audit",
            "State management modernization with Riverpod / Bloc",
            "WebRTC low-latency streaming integration",
            "Automated CI/CD build & test pipeline setup"
        }
    },
    new
    {
        Id = "custom-web",
        Title = "High-Converting Web & No-Code Solutions",
        Badge = "03",
        Description = "Custom Webflow, Wix, or Lovable platforms extended with custom HTML5, modern CSS, JavaScript, and Tailwind CSS.",
        Deliverables = new[]
        {
            "Bespoke brand-aligned web experiences (no generic templates)",
            "Custom admin panels for total business operations control",
            "100/100 Core Web Vitals speed and SEO optimization",
            "Seamless third-party API and database integrations"
        }
    }
}));

// --------------------------------------------------------------------------
// Contact & Inquiry Submission Endpoint
// --------------------------------------------------------------------------
app.MapPost("/api/contact", (ContactRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { Success = false, Message = "Name, Email, and Message are required fields." });
    }

    var inquiryId = $"INQ-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..6].ToUpper()}";
    
    // In production, send email alert / trigger webhook here
    Console.WriteLine($"[Build With ZT] New Project Inquiry Received ({inquiryId}):");
    Console.WriteLine($"  From: {request.Name} <{request.Email}>");
    Console.WriteLine($"  Type: {request.ProjectType ?? "General Inquiry"}");
    Console.WriteLine($"  Budget: {request.Budget ?? "Flexible"}");
    Console.WriteLine($"  Timeline: {request.Timeline ?? "ASAP"}");
    Console.WriteLine($"  Message: {request.Message}");

    return Results.Ok(new ContactResponse
    {
        Success = true,
        Message = "Thank you! Your project inquiry has been received. Zain will get back to you within 24 hours.",
        InquiryId = inquiryId
    });
});

// Fallback to index.html for SPA routing
app.MapFallbackToFile("index.html");

app.Run();
