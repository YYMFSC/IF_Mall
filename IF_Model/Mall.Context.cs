﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace IF_Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class mallEntities : DbContext
    {
        public mallEntities()
            : base("name=mallEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<CommonData> CommonData { get; set; }
        public virtual DbSet<Navbar> Navbar { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<productType> productType { get; set; }
        public virtual DbSet<shop> shop { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<V_Cart> V_Cart { get; set; }
        public virtual DbSet<V_Order> V_Order { get; set; }
        public virtual DbSet<V_Products> V_Products { get; set; }
        public virtual DbSet<mate> mate { get; set; }
        public virtual DbSet<Delivery> Delivery { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<customMade> customMade { get; set; }
        public virtual DbSet<DoorToDoor> DoorToDoor { get; set; }
    }
}
