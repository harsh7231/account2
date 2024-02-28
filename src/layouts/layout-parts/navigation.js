import duotone from "icons/duotone";
export const navigations = [
  {
    type: "label",
    label: "Dashboard",
  },
  {
    name: "LMS",
    icon: duotone.PersonChalkboard,
  },
  {
    name: "Sales 1",
    icon: duotone.BadgeDollar,
  },
  {
    name: "Sales 2",
    icon: duotone.MessagesDollar,
  },
  {
    name: "Hiring",
    icon: duotone.PersonCircleCheck,
  },
  {
    name: "Project 1",
    icon: duotone.RectangleCirclePlus,
  },
  {
    name: "Project 2",
    icon: duotone.DiagramProject,
  },
  {
    name: "CRM",
    icon: duotone.CommentsQuestionCheck,
    badge: {
      value: "30",
    },
  },
  {
    name: "SaaS",
    icon: duotone.LayerGroup,
  },
  {
    type: "label",
    label: "Management",
  },
  {
    name: "Profiles",
    icon: duotone.UserProfile,
    children: [
      {
        name: "Profile 1",
      },
      {
        name: "Profile 2",
      },
    ],
  },
  {
    name: "Accounts",
    icon: duotone.Accounts,
    children: [
      {
        name: "Account 1",
      },
      {
        name: "Account 2",
        path: "/dashboard/account-v2",
      },
    ],
  },
  {
    name: "User & Contact",
    icon: duotone.UserList,
    children: [
      {
        name: "Add User",
      },
      {
        name: "User List 1",
      },
      {
        name: "User List 2",
      },
      {
        name: "User Grid 1",
      },
      {
        name: "User Grid 2",
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
    name: "Invoice",
    icon: duotone.Invoice,
    children: [
      {
        name: "Invoice List 1",
      },
      {
        name: "Invoice List 2",
      },
      {
        name: "Invoice Details 1",
      },
      {
        name: "Invoice Details 2",
      },
      {
        name: "Create Invoice 1",
      },
      {
        name: "Create Invoice 2",
      },
    ],
  },
  {
    name: "Ecommerce",
    icon: duotone.Ecommerce,
    children: [
      {
        name: "Cart",
      },
      {
        name: "Payment",
      },
      {
        name: "Billing Address",
      },
      {
        name: "Product Details",
      },
      {
        name: "Shop 1",
      },
      {
        name: "Shop 2",
      },
      {
        name: "Checkout 1",
      },
      {
        name: "Checkout 2",
      },
      {
        name: "Payment Complete 1",
      },
      {
        name: "Payment Complete 2",
      },
    ],
  },
  {
    name: "Admin Ecommerce",
    icon: duotone.AdminEcommerce,
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
    name: "Projects",
    icon: duotone.ProjectChart,
    children: [
      {
        name: "Project List 1",
      },
      {
        name: "Project List 2",
      },
      {
        name: "Project List 3",
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
    name: "Data Table",
    icon: duotone.DataTable,
  },
  {
    type: "label",
    label: "Apps",
  },
  {
    name: "Todo List",
    icon: duotone.TodoList,
  },
  {
    name: "Calendar",
    icon: duotone.Calender,
  },
  {
    name: "Chats",
    icon: duotone.Chat,
    children: [
      {
        name: "Chat 1",
      },
      {
        name: "Chat 2",
      },
    ],
  },
  {
    name: "Sessions",
    icon: duotone.Session,
    children: [
      {
        iconText: "RT",
        name: "Sign In",
        children: [
          {
            name: "Sign In 1",
          },
          {
            name: "Sign In 2",
          },
        ],
      },
      {
        iconText: "RT",
        name: "Register",
        children: [
          {
            name: "Register 1",
          },
          {
            name: "Register 2",
          },
        ],
      },
      {
        iconText: "RT",
        name: "Forget Password",
        children: [
          {
            name: "Forget Password 1",
          },
          {
            name: "Forget Password 2",
          },
        ],
      },
      {
        name: "Two Step Verification",
      },
    ],
  },
  {
    name: "Pages",
    icon: duotone.Pages,
    children: [
      {
        name: "Pricing",
      },
      {
        name: "About",
      },
      {
        name: "Contact",
      },
      {
        name: "Privacy",
      },
    ],
  },
  {
    name: "Documentation",
    icon: duotone.FileCircleQuestion,
    type: "extLink",
  },
];
