// Controllers/GradesController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class GradesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public GradesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Grade>>> GetGrades()
    {
        return await _context.Grades.Include(g => g.Student).Include(g => g.Course).ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Grade>> PostGrade(Grade grade)
    {
        _context.Grades.Add(grade);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetGrades), new { id = grade.Id }, grade);
    }
}
