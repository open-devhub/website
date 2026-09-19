---
title: "What Happens When You Type google.com?"
description: "You type six characters and hit Enter, and DNS, routing, TLS, and your browser's rendering engine all quietly team up to turn that into a page. This is the real, layer by layer story of what happens in between."
authors: [SpideY]
date: September 1, 2026
tags: [networking, dns, http, tls, internet]
---

# What Happens When You Type `google.com`?

You type six characters.

`google.com`

You press **Enter**.

A moment later, Google's homepage appears on your screen.

It feels instantaneous.

But underneath that tiny interaction, your computer has just participated in an enormous chain of systems involving your browser, operating system, DNS infrastructure, network routing, encrypted connections, Google's servers, and finally the rendering engine inside your browser.

Your browser has to answer a deceptively simple question:

> **"Where is `google.com`, and how do I get its content?"**

The journey looks roughly like this:

```text
You type google.com
        ↓
Browser parses the URL
        ↓
Check local caches
        ↓
DNS resolution
        ↓
IP address discovered
        ↓
Network route
        ↓
Connection established
        ↓
TLS handshake
        ↓
HTTP request
        ↓
Google infrastructure
        ↓
HTTP response
        ↓
Browser receives bytes
        ↓
HTML parsing
        ↓
CSS + JavaScript + resources
        ↓
DOM + CSSOM
        ↓
Layout
        ↓
Paint
        ↓
Compositing
        ↓
Pixels on your screen
```

Let's follow that journey.

## 1. You type `google.com`

It begins with something incredibly ordinary.

You open your browser and type:

```text
google.com
```

Then you press Enter.

The browser first has to determine what you actually entered:

- Is it a search query?
- Is it a URL?
- Is it a hostname?
- Is there a protocol?

Because you entered:

```text
google.com
```

the browser interprets it as a web address. Conceptually, it becomes something like:

```text
https://google.com/
```

The browser now knows several important pieces:

```text
Scheme:    https
Hostname:  google.com
Port:      443
Path:      /
```

You didn't explicitly type `https://`. Modern browsers can infer the secure HTTP scheme for a domain.

Now the browser needs an address. And `google.com` isn't an IP address.

## 2. Computers don't route traffic using domain names

Humans like names. Computers ultimately communicate using network addresses.

You can remember:

```text
google.com
```

much more easily than something like:

```text
142.250.x.x
```

The system that connects those two worlds is **DNS** (the **Domain Name System**), the Internet's distributed naming system. It translates domain names into network addresses.

Conceptually:

```text
google.com → DNS → IP address
```

But before your computer asks a DNS server, it may check places where the answer could already exist.

## 3. The browser checks its caches

Your browser doesn't want to perform a complete DNS lookup every time you visit a website, since that would be wasteful. So it can cache DNS information.

Depending on the browser and operating system, resolution may involve several layers of caching:

- Browser DNS cache
- OS DNS cache
- Configured DNS resolver
- Internet DNS infrastructure

If the browser already knows the answer and the cached record is still valid, the process can be significantly faster. If not, the request continues.

## 4. DNS resolution begins

Your computer usually communicates with a DNS resolver. That resolver might be operated by:

- Your ISP
- Your organization
- Your router
- A public DNS provider
- Another network service

The resolver needs to discover the DNS records associated with `google.com`. DNS is hierarchical. A simplified lookup can look like:

```text
Your computer
     ↓
Recursive resolver
     ↓
Root DNS servers
     ↓
.com nameservers
     ↓
Authoritative nameservers
     ↓
google.com records
```

The resolver doesn't necessarily need to perform every step every time, it may already have the answer cached. But conceptually, this hierarchy is what makes the system work.

## 5. The root servers don't know Google's IP address

This is an important detail. The root DNS system doesn't contain a giant table saying:

```text
google.com → Google's IP
```

Instead, root servers can direct resolvers toward the nameservers responsible for the `.com` top-level domain. The resolver asks:

> Who handles `.com`?

The `.com` infrastructure responds with information about the authoritative nameservers for `google.com`. The resolver then asks those authoritative nameservers:

> What address should I use for `google.com`?

The authoritative DNS system provides the appropriate records.

## 6. A domain can have multiple addresses

You shouldn't think of a domain as necessarily mapping to one permanent IP address. A large service can have many addresses and many locations, including:

- IPv4 addresses
- IPv6 addresses
- Regional endpoints
- Edge locations
- Load-balancing mechanisms

DNS can therefore be part of a larger traffic-management strategy. The exact address returned to you can depend on factors such as network topology, DNS configuration, availability, and traffic-management systems.

The important point is:

> **`google.com` is a name, not a single physical machine.**

## 7. Now your computer knows where to connect

Eventually, your system gets an address it can use. Conceptually:

```text
google.com → IP address
```

Now the browser has another problem: how does a packet get from your device to that destination? Your computer doesn't usually have a direct physical connection to Google's servers. The traffic may travel through:

```text
Your device
    ↓
Wi-Fi / Ethernet
    ↓
Router
    ↓
ISP
    ↓
Multiple networks
    ↓
Google's network
    ↓
Destination
```

And the Internet needs to figure out that path.

## 8. The Internet doesn't have one central router

There isn't a giant machine somewhere that decides the route for every packet on Earth. The Internet is a network of interconnected networks.

- Organizations exchange routing information using systems such as **BGP** (the Border Gateway Protocol).
- Routing systems determine how different networks can reach one another.
- Your packet might cross multiple autonomous systems before reaching Google's infrastructure.
- Routers make forwarding decisions based on routing information; you don't manually choose that path.

## 9. Your packet doesn't necessarily take the same path every time

Internet routing is dynamic. The path can change because of:

- Network failures
- Congestion
- Routing policies
- Maintenance
- Traffic engineering
- Infrastructure changes

This is one reason the Internet is resilient. If one path becomes unavailable, routing systems can potentially direct traffic elsewhere. The Internet isn't one road; it's an enormous collection of interconnected roads.

## 10. Now we need a connection

Knowing the destination isn't enough. Your browser needs to communicate with the server. For traditional HTTPS over TCP, that means establishing a TCP connection.

The default HTTPS port is:

```text
443
```

TCP establishes a connection using a process commonly called the **three-way handshake**:

```text
Client                    Server

  SYN  -------------------->

       <-------------------- SYN-ACK

  ACK  -------------------->
```

Now both sides have established the TCP connection. But there's still a major problem: we don't want to send sensitive web traffic as plain text. That's where TLS comes in.

## 11. HTTPS means HTTP over an encrypted connection

You typed:

```text
https://google.com
```

not:

```text
http://google.com
```

HTTPS uses TLS to provide security properties such as encryption and server authentication. The browser needs to establish a secure TLS session. A simplified TLS 1.3 flow looks like:

```text
Client                         Server

ClientHello
     ------------------------>

                         ServerHello
                         Certificate
                         Key exchange
                         Finished
     <------------------------

Finished
     ------------------------>
```

The real protocol contains significantly more detail, but the important concept is:

> Both sides negotiate cryptographic parameters and establish shared secrets used to protect the connection. The server finishes its side of the handshake first (bundled with its certificate and key exchange), and the client's `Finished` message closes the handshake. After that, both sides can send encrypted application data.

## 12. How does the browser know it's really Google?

Encryption alone isn't enough. Imagine someone intercepted your connection and pretended to be Google. You would have an encrypted connection... to the attacker. That's where certificates and the certificate authority ecosystem become important.

Google's server presents a certificate. Your browser verifies that certificate against its trusted certificate authorities and checks properties such as:

- The certificate's validity
- The hostname
- Its cryptographic signature
- The certificate chain
- Other certificate constraints

If verification fails, your browser can warn you. If everything checks out, the browser has much stronger evidence that it's communicating with the intended service.

## 13. HTTP finally gets involved

Now we can actually send an HTTP request. At a simplified level, the request might look like:

```http
GET / HTTP/2
Host: google.com
User-Agent: ...
Accept: text/html
Accept-Language: ...
Accept-Encoding: gzip, br
```

The browser is essentially saying:

> "Give me the resource at `/`."

The actual request is more complex, and modern HTTP versions don't necessarily transmit it as literal text in the same way HTTP/1.1 does. But conceptually, that's what is happening.

## 14. HTTP/2 and HTTP/3 change the story

Modern web traffic isn't limited to old-school HTTP/1.1.

**HTTP/2** introduced features such as:

- Multiplexed streams
- Header compression
- More efficient connection usage

**HTTP/3** uses [QUIC](https://en.wikipedia.org/wiki/QUIC), which runs over UDP rather than TCP.

Conceptually, the protocol stacks look like:

```text
HTTP/1.1        HTTP/2          HTTP/3
   ↓               ↓               ↓
  TCP             TCP            QUIC
   ↓               ↓               ↓
  IP              IP              UDP
                                    ↓
                                   IP
```

The exact protocol negotiated depends on what the client and server support. Modern browsers can use newer transport and HTTP protocols to reduce latency and improve performance.

## 15. Your request reaches Google's infrastructure

This is where things become very different from visiting a small website. `google.com` isn't sitting on one server under someone's desk; large Internet services operate enormous distributed infrastructures. Your request can pass through multiple layers of Google's network and service architecture:

- **Google edge infrastructure**: the closest point of entry to the Internet
- **Traffic management**: deciding where the request should go
- **Frontend services**: terminating connections and routing internally
- **Application systems**: the logic that builds a response
- **Data services**: where the underlying data actually lives

The exact internal architecture is proprietary and changes over time. But the principle is straightforward:

> **A large service distributes work across many machines and locations.**

## 16. The edge matters

Large services try to handle users close to where they connect to the Internet. This reduces latency and allows traffic to be distributed efficiently. Instead of every request traveling to one central machine, traffic can be handled through distributed infrastructure.

This is one reason large websites can serve users around the world. Your request from India doesn't necessarily travel to one single server in the United States before anything happens. Internet infrastructure is distributed.

## 17. Load balancing decides where the request goes

Suppose thousands or millions of requests arrive. One server shouldn't necessarily process all of them; load-balancing systems distribute work.

```text
                  ┌── Server A
                  │
Request → Load Balancer ── Server B
                  │
                  └── Server C
```

The real systems are considerably more sophisticated. They can account for factors such as:

- Server health
- Capacity
- Location
- Traffic
- Service availability
- Routing policies

The goal is to keep the system responsive and resilient.

## 18. The server processes your request

Eventually, some system needs to determine what response to send.

- For a simple static page, that might involve retrieving already-generated resources.
- For a dynamic application, the server may perform application logic, access caches, query databases, call internal services, and construct a response.

The important thing is that:

> **The browser doesn't know how Google internally produces its response.** It only knows the protocol.

Request:

```text
GET /
```

Response:

```text
HTTP response
```

The complexity behind that response is hidden behind the network boundary.

## 19. The response comes back

The server sends an HTTP response. Conceptually:

```http
HTTP/2 200
Content-Type: text/html
Content-Encoding: br
Content-Length: ...
```

followed by the response body. A successful request might have a status such as `200 OK`. Other possibilities include:

| Status | Meaning               |
| ------ | --------------------- |
| `301`  | Moved Permanently     |
| `302`  | Found                 |
| `304`  | Not Modified          |
| `403`  | Forbidden             |
| `404`  | Not Found             |
| `429`  | Too Many Requests     |
| `500`  | Internal Server Error |
| `503`  | Service Unavailable   |

HTTP status codes are one of the fundamental ways servers communicate the outcome of requests.

## 20. Compression makes the response smaller

Web pages can contain a lot of data. Sending everything uncompressed would waste bandwidth. Modern servers can compress responses using algorithms such as **Brotli** or **gzip**.

```text
Original:
████████████████████████████████

Compressed:
██████████
```

The browser receives the compressed representation and decompresses it. Smaller payloads generally mean less data needs to cross the network, which can significantly matter on slower connections.

## 21. The browser receives bytes

Now the response has made its way back to your machine. But your browser doesn't immediately have a page. It has **bytes**. Those bytes need to be interpreted. For HTML, the browser begins parsing the document.

Imagine the response contains:

```html
<!doctype html>
<html>
  <head>
    <title>Google</title>
  </head>
  <body>
    <h1>Google</h1>
  </body>
</html>
```

The browser turns that markup into a structured representation.

## 22. HTML becomes the DOM

The browser parses HTML and constructs the **DOM** (the **Document Object Model**). Conceptually:

```text
HTML → Parser → DOM
```

The DOM is a tree. For example:

```text
Document
└── html
    ├── head
    │   └── title
    └── body
        └── h1
```

JavaScript can interact with this structure, that's how code can do things such as:

```js
document.querySelector("h1");
```

The browser isn't simply displaying raw HTML. It's building an internal representation of the document.

## 23. CSS becomes the CSSOM

HTML tells the browser what elements exist. CSS tells it how those elements should look. The browser parses CSS into another internal representation commonly referred to as the **CSSOM** (the **CSS Object Model**).

```text
HTML → DOM
CSS  → CSSOM
```

The browser then combines information from both.

## 24. The browser builds the render tree

The browser needs to determine what should actually be rendered. It combines relevant DOM and styling information into structures used for rendering:

```text
DOM + CSSOM → Render information → Layout
```

Not every DOM node necessarily results in something visible; elements that aren't rendered don't necessarily participate in visual rendering in the same way.

## 25. Layout calculates positions

Now the browser needs to answer: where does everything go? It calculates things such as:

- Width and height
- Position
- Margins and padding
- Text layout
- Element relationships

This stage is often called **layout**.

```text
Viewport
┌────────────────────────────┐
│                            │
│          Google            │
│                            │
│       [ Search Box ]       │
│                            │
│                            │
└────────────────────────────┘
```

The browser has to calculate the actual coordinates and dimensions of those elements.

## 26. Then the browser paints

Once the browser knows where things are, it needs to draw them: text, backgrounds, borders, images, shadows, icons. The browser generates visual output through a process generally referred to as **painting**.

```text
DOM → Style → Layout → Paint
```

But we're still not quite finished.

## 27. Compositing puts everything together

Modern browsers can divide visual content into layers. Those layers can then be composited together:

```text
Layer 1 ─── Background
Layer 2 ─── Content
Layer 3 ─── Image
Layer 4 ─── Animation
        ↓
    Compositor
        ↓
      Frame
```

The browser and graphics stack work together to produce the final frame. Depending on the content, some operations can be accelerated using the GPU.

## 28. Finally: pixels

After all those layers of processing, your display receives a frame. The journey that started with:

```text
google.com
```

has become:

```text
pixels
```

on your screen. And all of this happened incredibly quickly. You saw a page. Your computer saw:

```text
DNS
→ routing
→ transport
→ TLS
→ HTTP
→ bytes
→ parsing
→ DOM
→ CSSOM
→ layout
→ paint
→ compositing
→ pixels
```

## The complete journey

Let's put everything together.

```text
You
 │
 │ Type google.com
 ▼
Browser
 │
 │ Parse URL
 ▼
Local caches
 │
 │ DNS lookup if needed
 ▼
DNS Resolver
 │
 ├── Root
 ├── .com
 └── Authoritative DNS
 │
 ▼
IP Address
 │
 │ Network routing
 ▼
Internet
 │
 │ TCP / QUIC
 ▼
TLS
 │
 │ Secure connection
 ▼
HTTP
 │
 │ Request
 ▼
Google Infrastructure
 │
 ├── Edge
 ├── Traffic management
 ├── Load balancing
 ├── Application services
 └── Data services
 │
 │ Response
 ▼
Your Browser
 │
 ├── Receive bytes
 ├── Decompress
 ├── Parse HTML
 ├── Build DOM
 ├── Parse CSS
 ├── Build CSSOM
 ├── Calculate layout
 ├── Paint
 └── Composite
 │
 ▼
Your Screen
```

And you only typed:

```text
google.com
```

## What if something goes wrong?

This entire process has many potential failure points:

| If this fails...       | You might see...                                       |
| ---------------------- | ------------------------------------------------------ |
| DNS resolution         | `DNS_PROBE_FINISHED_NXDOMAIN` (or a similar DNS error) |
| Reaching the server    | `Connection failed`                                    |
| TLS verification       | `Your connection is not private`                       |
| Server-side processing | `500 Internal Server Error`                            |
| Resource lookup        | `404 Not Found`                                        |
| Slow network           | The page simply takes longer to arrive                 |

Modern web browsers hide enormous amounts of complexity behind a simple interface. That's one of the reasons the web feels so effortless.

## The important lesson

The web isn't one technology, it's a stack. When you visit a website, you're relying on many systems cooperating:

- Application
- HTTP
- TLS
- QUIC / TCP
- IP
- DNS
- BGP
- Operating System
- Browser
- GPU
- Display

Each layer has its own responsibilities. Each layer abstracts complexity from the layer above it. And that's one of the most powerful ideas in computer science:

> **Complex systems become manageable when responsibilities are separated into layers.**

You don't need to understand BGP to use Google. You don't need to understand TLS to log into a website. You don't need to understand DOM construction to build a web page.

But when something breaks, understanding the layers becomes incredibly valuable:

- If a domain doesn't resolve, investigate **DNS**.
- If the connection can't be established, investigate **networking**.
- If TLS fails, investigate **certificates and encryption**.
- If the server responds slowly, investigate the **application or network**.
- If the page loads but renders incorrectly, investigate the **browser and frontend**.

Knowing **which layer is responsible** is one of the most useful skills a developer can develop.

## One URL. An entire universe.

The next time you type:

```text
google.com
```

remember what's actually happening.

A browser interprets your input. DNS turns a human-readable name into an address. Routing finds a path through interconnected networks. A secure protocol establishes encrypted communication. HTTP carries your request. Distributed infrastructure processes it. Bytes travel back across the Internet. Your browser turns those bytes into structures. The rendering engine calculates styles and geometry. The graphics pipeline turns those structures into a frame.

And finally, **you see a webpage.**

All from six characters. That's the web. And that's what happens when you type `google.com`.

> **The Internet feels simple because billions of complicated decisions happen underneath the surface.**
