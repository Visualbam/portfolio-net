using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using visualbam.Models;
using visualbam.Persistence;

namespace visualbam.Controllers
{
    public class PostsController : Controller
    {
        private readonly VisualbamDbContext _context;

        public PostsController(VisualbamDbContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet("/api/posts")]
        public async Task<IEnumerable<Post>> GetPosts()
        {
            return await _context.Posts.ToListAsync();
        }
    }
}