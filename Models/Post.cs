using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace visualbam.Models
{
    [Table("Posts")]
    public class Post
    {
        [Key]
        [Required]
        public int post_id { get; set; }

        [Required]
        [StringLength(255)]
        public string title { get; set; }

        [Required]
        [StringLength(5000)]
        public string content { get; set; }

        [Required]
        public string category { get; set; }
    }
}