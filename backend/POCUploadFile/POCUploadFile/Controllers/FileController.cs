using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace POCUploadFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        // POST api/File
        [HttpPost]
        public async Task<IActionResult> Post(IFormFile file)
        {
            if (file.Length > 0)
            {
                var diretorio = "C:/Users/leona/Desktop/POC Upload React/arquivos";
                var filePath = Path.Combine(diretorio, file.Name);

                using (var stream = System.IO.File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                }
            }

            return Ok(new { name = file.Name, size = file.Length });
        }
    }
}