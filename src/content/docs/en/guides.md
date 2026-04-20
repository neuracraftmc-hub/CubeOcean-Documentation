---
title: Guides & Tutorials
description: Complete guide to using CubeOcean Cloud from initial setup to advanced usage
---

# CubeOcean Cloud Guides & Tutorials

## Overview

CubeOcean Cloud is a hosting platform that provides fully automated services through an integrated control panel. From purchase to deployment, all processes are handled instantly without requiring complex manual configuration.

This guide will help you understand how to use CubeOcean Cloud effectively, from basic setup to advanced usage.

---

# 1. Getting Started

## 1.1 Create an Account

1. Visit the CubeOcean Cloud website  
2. Click **Register**  
3. Fill in the required information:
   - Email address  
   - Password  
4. Verify your email  
5. Log in to the dashboard  

---

## 1.2 Dashboard Overview

After logging in, you will see the main sections:

- **Services** → Manage your hosting services  
- **Orders** → View purchase history  
- **Billing** → Payments and invoices  
- **Support** → Submit and manage tickets  
- **Account Settings** → Manage your account  

---

# 2. Purchasing Hosting

## 2.1 Choose a Plan

1. Navigate to the products page  
2. Select a hosting category  
3. Choose a plan based on your needs:
   - Storage  
   - Bandwidth  
   - Additional features  

---

## 2.2 Service Configuration

During checkout:

- Select a domain option:
  - Register a new domain  
  - Use an existing domain  
- Choose billing cycle  
- Add optional add-ons if available  

---

## 2.3 Payment

1. Select a payment method  
2. Complete the transaction  
3. Wait for automatic processing  

---

## 2.4 Automatic Activation

Once payment is successful:

- Hosting will be activated automatically  
- Control panel access will be created  
- Login details will be sent via email  

---

# 3. Using the Hosting Panel

## 3.1 Access the Panel

Use the credentials provided via email:

- Panel URL  
- Username  
- Password  

---

## 3.2 Main Features

### File Manager
- Upload website files  
- Edit files directly in the browser  

### Database
- Create MySQL databases  
- Manage via phpMyAdmin  

### Domain Management
- Add domains or subdomains  
- Configure redirects  

### Email Accounts
- Create domain-based email accounts  
- Set up forwarding  

---

# 4. Deploying Your Website

## 4.1 Manual Upload

1. Open File Manager  
2. Navigate to:
```

public_html

```
3. Upload your website files  
4. Extract if using a `.zip` archive  

---

## 4.2 Using Auto Installer

If available:

1. Open **Auto Installer**  
2. Select an application (e.g., WordPress)  
3. Click **Install**  
4. Configure:
- Site name  
- Admin username  
- Admin password  

---

## 4.3 Connecting a Domain

1. Update your domain nameservers to CubeOcean Cloud  
2. Wait for DNS propagation (1–24 hours)  
3. Your domain will become active  

---

# 5. Hosting Management

## 5.1 Maintenance & Controls

Depending on the panel, you may have:

- Restart services  
- Clear cache  
- Enable maintenance mode  

---

## 5.2 Monitoring

Track your resource usage:

- CPU  
- RAM  
- Disk space  

---

## 5.3 Backups

Regular backups are recommended:

- Manual backups  
- Automatic backups (if supported)  

---

# 6. Troubleshooting

## 6.1 Website Not Accessible

Check:

- DNS / nameserver configuration  
- Files inside `public_html`  
- Hosting service status  

---

## 6.2 Database Errors

- Ensure the database is created  
- Verify configuration in:
```

config.php / .env

```

---

## 6.3 Unable to Access Panel

- Reset your password  
- Verify login credentials  
- Contact support if needed  

---

# 7. Support

If you encounter issues:

1. Go to **Support**  
2. Click **Open Ticket**  
3. Provide detailed information:
 - Error message  
 - Screenshots (if available)  
 - Related domain  

---

# 8. Best Practices

- Use strong passwords  
- Perform regular backups  
- Avoid uploading malicious files  
- Keep applications updated  

---

# 9. Advanced Usage

## 9.1 Multiple Domains

- Add additional domains  
- Use addon domains feature  

---

## 9.2 Subdomains

Example:
```

blog.yourdomain.com
api.yourdomain.com

```

---

## 9.3 Cron Jobs

Use cron jobs to automate tasks:

- Scheduled backups  
- Script execution  
- Maintenance tasks  

---

# 10. Conclusion

CubeOcean Cloud is designed to deliver a fast, automated, and user-friendly hosting experience. With its integrated system, users can deploy and manage websites without dealing with complex configurations.
```
