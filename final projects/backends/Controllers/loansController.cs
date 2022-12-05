using Microsoft.AspNetCore.Mvc;
using backends.Models;

namespace backends.Controllers;

[ApiController]
[Route("Api/bussinessloans")]
public class loansController : ControllerBase
{
    private readonly FinalprojectContext db;

    public loansController(FinalprojectContext ds)
    {
        this.db=ds;
    }
    [HttpPost("insertmethod")]
    public object insertmethod(Register redobj)
    {
        try{
            Cilents1 cl1=new Cilents1();
            if(cl1.Bussinessid==0)
            {
                cl1.Firstname=redobj.Firstname;
                cl1.Lastname=redobj.Lastname;
                cl1.MobileNo=redobj.MobileNo;
                cl1.Emailid=redobj.Emailid;
                cl1.Passwords=redobj.Passwords;
                cl1.Monthlysales=redobj.Monthlysales;

                db.Cilents1s.Add(cl1);
                db.SaveChanges();
                return new Respons{status="valid users",message="success"};
                


            }
        }
        catch (SystemException)
        {
            throw;
        }
        return new Respons{status="error message",message="invalid users"};
    }

     [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.db.Cilents1s.FirstOrDefault(o=>o.Bussinessid==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.db.Cilents1s.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.db.Cilents1s.Remove(user);
            int result = this.db.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }



    [HttpPost("Logins")]
    public IActionResult Logins (Logins ask)
    {
        var logindetails=db.Cilents1s.Where(i=>i.Emailid.Equals(ask.email)&& i.Passwords.Equals(ask.passwords)).FirstOrDefault();

        if(logindetails==null)
        {
            return Ok(new Respons {status="invalid ",message="tryagain"});
        }
        else
        {
            return Ok(new Respons{status="valid",message="success"});
        }
    }
    [HttpGet("viewdetails")]
    public IQueryable<Cilents1>GetCilents()
    {
        try{
            return db.Cilents1s;
        }
        catch(SystemException)
        {
            throw;
        }
    }

            
        }



