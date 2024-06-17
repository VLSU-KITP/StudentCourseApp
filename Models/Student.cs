// Models/Student.cs
public class Student
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string MiddleName { get; set; }
    public string Group { get; set; }
}

// Models/Course.cs
public class Course
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// Models/Grade.cs
public class Grade
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public int Score { get; set; }

    public Student Student { get; set; }
    public Course Course { get; set; }
}
