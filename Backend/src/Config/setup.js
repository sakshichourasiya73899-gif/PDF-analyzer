import dotenv from "dotenv";
import dns from "dns";

// Load environment variables FIRST
dotenv.config();

// Override DNS to use Google's public resolvers (fixes ECONNREFUSED on SRV lookups)
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
