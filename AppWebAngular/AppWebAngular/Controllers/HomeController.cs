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

        private static List<Cliente> listaCliente = new List<Cliente>();

        public HomeController()
        {

        }

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

        [HttpPost]
        public JsonResult AddCliente(Cliente cliente) {

          cliente.Id = listaCliente.Count + 1;
          listaCliente.Add(cliente);
          return Json(new { Codigo = 200, Mensagem = "Cliente "+ cliente .Nome + " inserido com sucesso!"}, JsonRequestBehavior.AllowGet);
        }

        //[HttpDelete]
        //public JsonResult RemoveCliente(int id)
        //{
        //  var cliente = listaCliente.Where(t=>t.Id==id).SingleOrDefault();
        //  if (cliente != null)
        //  {
        //    listaCliente.Remove(cliente);
        //    return Json(new { code = 200, msg = "Cliente removido com sucesso!" }, JsonRequestBehavior.AllowGet);
        //  }

        //  //not-found
        //  return Json(new { code = 404, msg = "Cliente removido com sucesso!" }, JsonRequestBehavior.AllowGet);
        //}


        [HttpGet]
        public JsonResult GetClientes()
        {
            return Json(listaCliente, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public JsonResult RemoverCliente(int id)
        {
          Cliente cliente = listaCliente.Where(t => t.Id == id).SingleOrDefault();

          string mensagem = string.Empty;

          if (cliente!=null)
            mensagem = "Cliente " + cliente.Nome + " deletado com sucesso!";
          else
            mensagem = "Falhao ao remover Cliente ";

          listaCliente.Remove(cliente);
          return Json(new { Codigo = 200, Mensagem = mensagem });
        }
  }
}
