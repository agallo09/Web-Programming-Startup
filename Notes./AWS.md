# Create a server:
Log in: https://aws.amazon.com/es/ 
Summary:
-  Create a server
-  Buy a domain
-  Change the security using caddy
#### Steps
-  EC2
-  Chanfe region to  to US East (N. Virginia) - us-east-1
-  Launch Instance
-  Select t3.nano, t3.micro, or t2.micro
-  Create a new key pair
-  auto-assign public IP
-  For the Firewall (security group) select the option to Create security group
-  Open your browser and paste the public IP address
### Console
-  ssh -i [key pair file] ubuntu@[ip address]
-   ls -l
-  Should look like this:
-     total 4
      lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile
      lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy
      drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services
### Elastic Ip
-  Open the AWS console in your browser and log in.
-  Navigate to the EC2 service.
-  From the menu on the left select Network & Security|Elastic IPs.
-  Press the Allocate Elastic IP address button.
-  Press the Allocate button.
-  Select the newly displayed allocated address and press the Actions button.
-  Select the Associate Elastic IP address option.
-  Click on the Instance box and select your server instance.
-  Press Associate.

# Purchase a domanin name:
-  Route 53
-  Domain
-  Registered domains
-  Register domain
-  Write down the domain name: .click and .link are the cheapest
-  Add to cart and buy
# DNS Records:
-  Route 53
-  HOsted zones
-  Domains
-  Pending requests
-  A type
-  Create record
-  A type
-  Copy the ip address and paste it on search with https:// on the front
# Caddy:
Web service to host the webpage
### Http to HTTPS
More security, encrypted
-  Console
-  ssh -i [key pair file] ubuntu@[yourdomainnamehere]
-  ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click
-  cd ~
- i Caddyfile
- example:
-     myfunkychickens.click {
       root * /usr/share/caddy
       file_server
       header Cache-Control no-store
       header -etag
       header -server
       }
      startup.myfunkychickens.click {
         reverse_proxy * localhost:4000
         header Cache-Control no-store
         header -server
         header -etag
         header Access-Control-Allow-Origin *
      } 
      simon.myfunkychickens.click {
         reverse_proxy * localhost:3000
         header Cache-Control no-store
         header -server
         header -etag
         header Access-Control-Allow-Origin *
      }
-  save and exit w this command: :wq
-  sudo service caddy restart
-  try to open the ip addreess with https:// on the front
-  
