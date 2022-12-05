using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backends.Models;

public partial class FinalprojectContext : DbContext
{
    public FinalprojectContext()
    {
    }

    public FinalprojectContext(DbContextOptions<FinalprojectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cilents1> Cilents1s { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

{
    
}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cilents1>(entity =>
        {
            entity.HasKey(e => e.Bussinessid).HasName("PK__cilents1__9D2E9A0C840DA8BA");

            entity.ToTable("cilents1");

            entity.Property(e => e.Bussinessid).HasColumnName("bussinessid");
            entity.Property(e => e.Emailid)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("emailid");
            entity.Property(e => e.Firstname)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("firstname");
            entity.Property(e => e.Lastname)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("lastname");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("mobile_no");
            entity.Property(e => e.Monthlysales)
                .IsUnicode(false)
                .HasColumnName("monthlysales");
            entity.Property(e => e.Passwords)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("passwords");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
