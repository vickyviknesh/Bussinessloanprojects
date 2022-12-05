using System;
using System.Collections.Generic;


namespace backends.Models;

public partial class Cilents1
{

    
    public int Bussinessid { get; set; }

    public string Firstname { get; set; } = null!;

    public string Lastname { get; set; } = null!;

    public string Emailid { get; set; } = null!;

    public string Passwords { get; set; } = null!;

    public string MobileNo { get; set; } = null!;

    public string Monthlysales { get; set; } = null!;
}
