namespace BuildWithZT.Api.Models;

public class ContactRequest
{
    public required string Name { get; set; }
    public required string Email { get; set; }
    public string? ProjectType { get; set; }
    public string? Budget { get; set; }
    public string? Timeline { get; set; }
    public required string Message { get; set; }
}

public class ContactResponse
{
    public bool Success { get; set; }
    public required string Message { get; set; }
    public required string InquiryId { get; set; }
    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
}
