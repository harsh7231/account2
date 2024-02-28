import Icons from "icons/sidebar";
const index = [
  {
    title: "Dashboards",
    Icon: Icons.DashboardIcon,
    children: [
      {
        name: "Learning Management",
      },
      {
        name: "Job Management",
      },
      {
        name: "CRM",
      },
      {
        name: "Sales",
      },
      {
        name: "Sub Child",
        subChildren: [
          {
            name: "Sub Child V1",
          },
          {
            name: "Sub Child V2",
          },
          {
            name: "Sub Child V3",
          },
        ],
      },
      {
        name: "Sales V2",
      },
      {
        name: "SaaS",
      },
      {
        name: "Project Management",
      },
      {
        name: "Project Management V2",
      },
    ],
  },
  {
    title: "User & Contact",
    Icon: Icons.UserProfileIcon,
    children: [
      {
        name: "Add User",
      },
      {
        name: "User List",
      },
      {
        name: "User List V2",
      },
      {
        name: "User Grid",
      },
      {
        name: "User Grid V2",
      },
      {
        name: "Contact List",
      },
      {
        name: "Contact Grid",
      },
    ],
  },
  {
    title: "Invoice",
    Icon: Icons.InvoiceIcon,
    children: [
      {
        name: "Invoice List",
      },
      {
        name: "Invoice List V2",
      },
      {
        name: "Invoice Details",
      },
      {
        name: "Invoice Details V2",
      },
      {
        name: "Create Invoice",
      },
      {
        name: "Create Invoice V2",
      },
    ],
  },
  {
    title: "Ecommerce",
    Icon: Icons.EcommerceIcon,
    children: [
      {
        name: "Shop",
      },
      {
        name: "Shop V2",
      },
      {
        name: "cart",
      },
      {
        name: "Product Details",
      },
      {
        name: "Checkout",
      },
      {
        name: "Checkout V2",
      },
      {
        name: "Billing Address",
      },
      {
        name: "Payment",
      },
      {
        name: "Payment Complete",
      },
      {
        name: "Payment Complete V2",
      },
    ],
  },
  {
    title: "Admin Ecommerce",
    Icon: Icons.AdminEcommerceIcon,
    children: [
      {
        name: "Product List",
      },
      {
        name: "Product Grid",
      },
      {
        name: "Create Product",
      },
      {
        name: "Order Management",
      },
      {
        name: "Product Management",
      },
      {
        name: "Customer Management",
      },
    ],
  },
  {
    title: "Profiles",
    Icon: Icons.UserProfileIcon,
    children: [
      {
        name: "Profile",
      },
      {
        name: "Profile V2",
      },
    ],
  },
  {
    title: "Projects",
    Icon: Icons.ProjectIcon,
    children: [
      {
        name: "Project List V1",
      },
      {
        name: "Project List V2",
      },
      {
        name: "Project List V3",
      },
      {
        name: "Team Member",
      },
      {
        name: "Project Details",
      },
    ],
  },
  {
    title: "Accounts",
    Icon: Icons.AccountSettingsIcon,
    children: [
      {
        name: "Account",
      },
      {
        name: "Account V2",
        path: "/dashboard/account-v2",
      },
    ],
  },
  {
    title: "DataTable",
    Icon: Icons.DataTableIcon,
  },
  {
    title: "Pricing",
    Icon: Icons.UserManagementIcon,
  },
  {
    title: "Todo List",
    Icon: Icons.KanbanIcon,
  },
  {
    title: "Calendar",
    Icon: Icons.CalendarIcon,
  },
  {
    title: "Chats",
    Icon: Icons.ChatIcon,
    children: [
      {
        name: "Chat V1",
      },
      {
        name: "Chat V2",
      },
    ],
  },
  {
    title: "Sessions",
    Icon: Icons.SessionsIcon,
    children: [
      {
        name: "Sign In",
      },
      {
        name: "Sign In V2",
      },
      {
        name: "Register",
      },
      {
        name: "Register V2",
      },
      {
        name: "Forget Password",
      },
      {
        name: "Forget Password V2",
      },
      {
        name: "Two Step Verification",
      },
    ],
  },
  {
    title: "Pages",
    Icon: Icons.PagesIcon,
    children: [
      {
        name: "About",
      },
      {
        name: "Contact",
      },
      {
        name: "Pricing",
      },
      {
        name: "Privacy",
      },
    ],
  },
];
export default index;
