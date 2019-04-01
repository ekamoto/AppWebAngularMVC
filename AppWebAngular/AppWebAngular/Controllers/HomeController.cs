using AppWebAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppWebAngular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult GetClientes()
        {

            List<Cliente> listaCliente = new List<Cliente>();
            listaCliente.Add(new Cliente()
            {
              Nome = "Leandro Shindi Ekamoto",
              Email = "ekamoto.leandro@gmail.com",
              Telefone = "(67) 98109-6174"
            });

            listaCliente.Add(new Cliente()
            {
              Nome = "Priscila Vasconcelos Ekamoto",
              Email = "pri.vasconcelos@hotmail.com",
              Telefone = "(67) 98105-4502"
            });

            return Json(listaCliente, JsonRequestBehavior.AllowGet);
        }
  }
}
