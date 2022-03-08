using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RFVUE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public string Get() => "Working";
    }
}
