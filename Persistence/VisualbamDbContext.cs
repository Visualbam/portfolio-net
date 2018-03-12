using Microsoft.EntityFrameworkCore;
using visualbam.Models;

namespace visualbam.Persistence
{
    public class VisualbamDbContext : DbContext
    {
        public VisualbamDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Post> Posts { get; set; }

    }
}