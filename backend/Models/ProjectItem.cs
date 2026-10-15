namespace BuildWithZT.Api.Models;

public class ProjectItem
{
    public required string Id { get; set; }
    public required string Name { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required string DetailedOverview { get; set; }
    public required string Category { get; set; }
    public required string Language { get; set; }
    public required string HtmlUrl { get; set; }
    public string? LiveDemoUrl { get; set; }
    public required List<string> TechStack { get; set; }
    public required List<string> Highlights { get; set; }
    public string Icon { get; set; } = "🚀";
    public string Gradient { get; set; } = "teal";
}
