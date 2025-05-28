---
title: Cloud
description: Samenvatting voor cloud examen
published: true
date: 2025-05-28T12:41:17.135Z
tags: examen, cloud
editor: markdown
dateCreated: 2025-05-27T18:52:44.453Z
---

# Cloud & Dev Ops
## hier komt de samenvatting nog

Okééé, adem in... adem uit... koffie erin... Hier gaan we, al die examenleerdoelen erdoor rammen voor het licht wordt. Pfff, zoveel. Maar goed, alles uit die cursusbronnen dus. Hier is de samenvatting slash brain dump.

# Inhoudsopgave
&nbsp;
&nbsp;

[Cloud](#cloud)  
[Containers](#containers)  
[Crafting a Container](#crafting-a-container)  
[Dockerfile keywords](#dockerfile-keywords)  
[DevOps & de Pipeline](#devops--de-pipeline)  
[DevOps lifecycle stappen in pipeline](#devops-lifecycle-stappen-in-pipeline)  
[Operating with Infrastructure as Code](#operating-with-infrastructure-as-code)  
[Monitoring & More](#monitoring--more)  
[Alerts](#alerts)  
&nbsp;
&nbsp;

[Docker Commando's](#docker-command)  
[Dockerfile Maken (De Blauwdruk)](#dockerfile-maken-de-blauwdruk)  
[Docker Compose (docker-compose.yml) Maken](#docker-compose-docker-composeyml-maken)  
[Commando's](#command)
&nbsp;
&nbsp;

# **Cloud** 

Eerste deel, die **cloud** shit. Beginnen bij het begin: hoe we van **serverhokken** naar **datacenters** gingen en nu naar de cloud. Vroeger had je die serverkamers op kantoor, maar dat was drama. **Duur op voorhand**, **superveel onderhoud** zelf doen, **schaalt voor geen meter** (stel je voor, zo'n e-commerce ding dat crasht als er veel volk komt), **niet betrouwbaar** (brandje, outage, boem), en **alles qua security** was jouw probleem. Echt een boeltje opruimen.

Dus, grote bedrijven centraliseerden alles in **datacenters**. Centraal \= schaalvoordeel. Maar dat vraagt wel **zotte power** (met die PDUs en backups zoals **dieselgeneratoren** en **UPS batterijen**), **serieuze koeling** (hot/cold aisles, CRAC systemen, soms zelfs buitenlucht), en **zware security** (mantraps, gas blussystemen). Al die moeite voor **betrouwbaarheid en veerkracht**. Dat meet je in **tiers**, van Tier 1 (geen redundancy, veel downtime) tot Tier 4 (alles dubbel, bijna nul downtime). **Redundancy** is dus gewoon dingen dubbel hebben zodat als één crasht, de ander overneemt. Belgische datacenters? Ja, InterXion (nu Digital Realty) en LCL.

Uit die datacenters kwamen nieuwe businessmodellen. Eerst **Co-location**: je huurt plek in een datacenter en zet er je eigen spullen. InterXion deed dat. Daarna dachten ze: we doen **meer voor de klant**, die moet zich niet met hardware bezighouden. Zo ontstond **Cloud Computing**. Cloud \= ook datacenters eigenlijk, maar je ziet de fysieke locatie niet per se.

Twee smaken: **Private Cloud** (vaak kleinere providers of grote bedrijven zelf, je weet waar je data staat, kan customization vragen, soms zelfs techniekers sturen) en **Public Cloud** (die grote jongens zoals **AWS, Azure, GCP**, hyperscale datacenters, je weet de exacte plek niet, minder customization, geen techniekers sturen). **Hybride Cloud** is een mix.

De **voordelen van cloud** zijn basically de **nadelen van on-premise oplossen**:

* **Lage startkosten** (pay-as-you-go).   
* **Weinig onderhoud** zelf (provider doet dat).   
* **Schaalt super makkelijk** (on-demand). Dat heet **Scalability** (manueel opschalen bij pieken) of **Elasticity** (automatisch op en neer met de vraag). **Load balancing** helpt daarbij, verdeelt het werk over servers.   
* **Hoge betrouwbaarheid** (HA \- High Availability, altijd online) en **Disaster Recovery** (DR \- herstel na zware rampen). Geo-redundantie, zones, regions helpen hier.   
* **Sterke security** (providers hebben zotte middelen). Ze zorgen voor **confidentiality** (enkel wie mag ziet data) en **integrity** (data kan niet zomaar veranderd worden). Met encryptie, firewalls, authenticatie, autorisatie. 

Cloud is ook **IT as a Service**. Drie hoofdmodellen:

* **IaaS (Infrastructure as a Service)**: Jij huurt ruwe hardware (VMs, opslag, netwerken). Jij installeert OS, apps, alles. Veel verantwoordelijkheid bij jou. Azure VM's zijn IaaS.   
* **PaaS (Platform as a Service)**: Jij huurt een platform (database, webserver, dev tools). Provider doet OS en middleware. Jij focust op je app. Minder verantwoordelijkheid bij jou. Azure Web Apps, Azure Blobs, Azure Queues, Azure Tables, Relationele/Non-relationele databases zijn PaaS.   
* **SaaS (Software as a Service)**: Jij gebruikt gewoon de app (email, CRM). Provider doet alles. Jij logt gewoon in. Minste verantwoordelijkheid bij jou. Azure AI, Azure Active Directory (IAM), Azure Key Vault (Encryption), Azure Security Center (Threat detection) zijn SaaS. 

Azure heeft **Regions** (geografische gebieden met datacenters voor HA/DR), **Subscriptions** (logische container voor billing/management), en **Resource Groups** (logische container voor gerelateerde resources in een region). Zones zijn deel van DR. Azure kost geld op basis van **servicetype, gebruik, locatie, performance tier**. Kosten checken kan met de **Pricing Calculator**, **Cost Management portal**, of **Billing alerts**. Kosten besparen? Kies juiste service level (Free Tier\!), schaal op aanvraag, reserveer instances (voor lange termijn). Een VM maken op Azure doe je via de portal of CLI, installeer software via SSH. Poort 80 openzetten is nodig voor een webserver.

Challenges deel 1: Nadelen cloud? Ja, privacy issues bij public cloud, je zit vast aan de menu van de provider, je kan niet on-site fixen. Waarom private cloud ipv public? Omdat je privacy/locatie wil garanderen, customization wil, on-site access wil (en de nadelen van public cloud wil vermijden). **Static website**: enkel HTML, CSS, JS, geen server code. Deployen op Azure Static Web Apps (stond niet App Services, oops) doe je door de resource aan te maken, deployment token als secret te zetten, en een workflow te maken. Andere hosting mogelijkheden stonden er niet in. **NoSQL**: databases anders dan relationeel model. Goed voor grote/complexe data, flexibel, schaalbaar op distributed cloud. Main types stonden niet uitgelegd, wel dat ze anders zijn dan SQL qua structuur en query taal. Cosmos DB is Azure's NoSQL. Structuur: Account \-\> Database \-\> Container (ipv Table) \-\> JSON. Partition key moest je opzoeken. Cosmos DB aanmaken en data erin zetten staat beschreven. Python read van Cosmos stond er niet in hoe. MongoDB is een populaire NoSQL database. Atlas is de cloud service. MongoDB anders dan Cosmos DB moest je opzoeken. Features/components/sharding van MongoDB/Atlas stonden er niet in (wel goal, niet uitgelegd). Use cases ook niet. Steps MongoDB Atlas aanmaken en Python read stonden er ook niet in.

# **Containers** 

Oké, door naar containers. Waarom containers? VMs zijn inefficiënt voor kleine apps. Elke VM heeft een full OS, kost veel resources. Containers pakken enkel de app code, dependencies, runtime in kleine geïsoleerde omgevingen. Ze delen de kernel van de host OS. Structuur: file system (gebaseerd op **image**), de app zelf, dependencies, configuratie (metadata, env vars). Geen eigen kernel zoals een VM. Container engine (Docker\!) ipv hypervisor (voor VMs). Engine virtualiseert OS, hypervisor virtualiseert hardware. Containers zijn lichter en sneller. Geschiedenis: van Solaris Containers/FreeBSD Jails naar Linux-VServer (gepatchte kernel), naar LXC (met cgroups/namespaces, maar moeilijk), naar **Docker** (game-changer, met **images**), naar **Kubernetes** (orkestratie, schalen), standaardisatie met OCI, tot cloud providers die managed services aanbieden (AKS, GKE, ECS). Containers gaven **efficiëntie** en losten **inconsistentie** tussen omgevingen op.

**Container images** zijn als snapshots/templates, statisch, als een cookie cutter. **Containers** zijn de runtime instances van een image, geïsoleerd van de host en andere containers, efemeer, zoals de koekjes zelf. Docker gebruikt images als blueprints. Docker Hub is de cloud repo voor images, waar je pullen en pushen kan. Officiële images bestaan (nginx, mysql, tensorflow). **Alpine Linux** vs **Debian Linux**: Alpine is lichtgewicht, klein image size, security focused, minder packages. Debian is stabiel, groot repository, maar grotere images. Alpine \= sneller startup, minder resource. Nginx image is vaak Alpine base. Python image kan Debian of Alpine/Slim zijn. Container processen: een container draait zolang het **main process** draait. Minstens één proces nodig. Je kan commando overriden bij docker run. docker run hello-world eerst zoekt lokaal, niet gevonden, pullt van Docker Hub, runt, container stopt. docker run alpine ls \-l vindt image, maakt container, runt commando ls \-l erin, container stopt. docker run \-it alpine sh start interactieve shell in container. \-it \= interactive terminal. docker ps toont running containers. docker ps \-a toont alle containers (running en gestopt). Containers zijn geïsoleerd qua filesystem en namespace. Changes in één container affecteren de image of andere containers niet. docker start CONTAINER\_ID start een gestopte container. docker exec CONTAINER\_ID command runt een commando in een *running* container. docker attach CONTAINER\_ID koppelt je terminal aan een running container. docker stop CONTAINER\_ID stopt een container. docker rm CONTAINER\_ID verwijdert een container. \-d flag runt container in background (detached). \-p host-port:container-port publisht poorten. Poorten zijn als deuren, host:container mapping. Poortconflicten: als host poort al in gebruik is. Oplossing: andere host poort kiezen. docker logs container\_name toont logs. docker top container\_name toont processen.

Challenges deel 2: **Environment variables**: dynamische waardes die gedrag processen in container beïnvloeden. Geven config info aan app. Benefits moesten we opzoeken. Voorbeelden database env vars moesten we opzoeken. Grafana is een tool voor dashboards, alerts, rapporten. Main features/uses moesten we opzoeken. **Docker Volumes**: maken data persistent, zelfs als container verdwijnt. Los van container lifecycle. Named volumes. Bind mounts/host volumes: mounten lokale folder naar container. Waarom nuttig moesten we opzoeken. Commands voor volumes moesten we opzoeken. MySQL met env vars en volume aanmaken stond er niet in (wel als challenge).

## **Crafting a Container** 

Hoe maak je images? Twee manieren:

1. **Instance Promotion /** docker commit: run een container, installeer/pas aan, check de changes met docker diff, commit de container instance als nieuwe image docker commit CONTAINER\_ID. Geef het een naam/tag docker image tag IMAGE\_ID imagename:tag. Simpel, maar niet reproduceerbaar/makkelijk te beheren.   
2. **Dockerfile /** docker build: een file met instructies om een image te bouwen. Veel krachtiger, makkelijker te beheren. docker build \-t imagename:tag . bouwt de image uit de Dockerfile in de huidige map. 

   ### **Dockerfile keywords** 

* **FROM**: specificeert de **base image**. STARTPUNT. FROM ubuntu.   
* **RUN**: **executeert commando** tijdens het bouwen van de image. Gebeurt maar 1 keer. RUN apt-get update && apt-get install \-y figlet.   
* **COPY**: **kopieert files** van de Docker host (jouw laptop) naar de image. **COPY . /app.**   
* **WORKDIR**: zet de **werkdirectory** in de image voor volgende instructies. WORKDIR /app.   
* **CMD**: specificeert het **default commando** dat runt als een **container start**. CMD \["python", "pyramid.py"\]. Kan overschreven worden bij docker run.   
* **EXPOSE**: **documenteert welke poorten** de app gebruikt. **Exposeert de poorten NIET echt**. Moet nog met \-p bij docker run. Poorten 80 (HTTP) en 443 (HTTPS) zijn voor webverkeer. 

Image layers: images worden gebouwd in **lagen**. Elke instructie in Dockerfile \= vaak een nieuwe laag. docker history imagename toont de lagen. Lagen zijn **immutable** (niet beschrijfbaar). Een running container krijgt een extra writable layer. **Caching**: Docker hergebruikt lagen die niet veranderd zijn tijdens het bouwen. \---\> Using cache. Dit maakt builds sneller.

Challenges deel 3: Apache Dockerfile maken moest je doen. Apache installeren van scratch met Alpine/apk moest je doen (met artikel hint). SQL scripts runnen bij mysql container init moest je opzoeken. ENV vs ARG verschil moesten we opzoeken. ENV kan je wel overschrijven met \-e bij docker run. Basic Python app image maken moest je doen. requirements.txt: file met Python dependencies, pip install \-r installeert ze. Nuttig om dependencies te beheren. CMD vs ENTRYPOINT verschil moesten we opzoeken. Kleinste container size Python: met kleine base images zoals \-slim of \-alpine. pip om libs te installeren in container. Python Hello World Dockerfile moest je doen. Python todo caller images moesten we maken.

# **DevOps & de Pipeline** 

**DevOps**: set van praktijken, tools, cultuur. **Automatiseert en integreert dev en ops**. Doel: brug slaan, communicatie, efficiëntie. DevOps lifecycle: 8 fases (dev links, ops rechts), vormt een **infinity symbol ♾** omdat monitoring issues terugvoert naar planning. Lifecycle wordt ondersteund door **pipelines/workflows**. GitHub Actions: tool van GitHub om repo-gerelateerde acties te automatiseren. GitHub noemt het workflows.

.yml workflow file structuur:

* name: naam van de workflow.   
* on: **event** dat workflow **triggert** (push, pull\_request, issue). on: push.   
* jobs: collectie van taken. Elke job runt in een **aparte runner VM**.   
* runs-on: type runner VM (ubuntu-latest is GitHub hosted).   
* steps: sequentie van commando's in een job.   
* run: commando dat shell uitvoert in runner VM. run: hostname.   
* uses: actie die een step gebruikt. Kan built-in (actions/checkout) of custom zijn (Cyb3r-Jak3/html5validator-action). Haalt uit GitHub Actions Marketplace.   
* with: input parameters voor een action. css: true voor validator.   
* branches: \[main\]: workflow runt enkel op push naar main branch.   
* needs: jobname: job wacht tot andere job klaar is. 

## **DevOps lifecycle stappen in pipeline** 

* **Plan**: buiten pipeline, requirements, design, tools (Trello, Jira).   
* **Code**: schrijven code, version control (GitHub), **pushen**.   
* **Test**: **automatisch testen** (validator) na push, gebeurt in **CI**.   
* **Release**: software **klaarmaken voor deployment** (image maken), gebeurt in **CD (Continuous Delivery)**.   
* **Deploy**: software **automatisch deployen** naar productie, gebeurt in **CD (Continuous Deployment)**. 

**Continuous Integration (CI)**: frequent code changes integreren. Automatisch testen bij elke integratie. Issues vroeg vinden. **Continuous Delivery (CD)**: software frequent klaar maken voor levering/gebruik. Software is altijd **release-ready**. Vermindert kosten, tijd, risico van leveren. Geverifieerd door tests. **Continuous Deployment (CD)**: software automatisch deployen naar gebruikers. Geen manuele goedkeuring nodig. Software is altijd **available for use**. Geverifieerd door tests.

Challenges deel 4: DevOps Culture definitie/aspecten/outcomes/strategieën moesten we opzoeken. \-slim/-alpine Python images zijn kleiner. SAST (Static Application Security Testing) vs DAST (Dynamic) moesten we opzoeken. SonarCloud/SonarQube (SAST tools) moesten we opzoeken. SonarCloud issue categories: **🐞 Bugs, 🔓 Vulnerabilities, 🛡 Security Hotspots, ☢ Code Smells**. **Quality Gate**: definieert kwaliteitseisen, blokkeert pipeline als niet voldaan. FastAPI Python API met Dockerfile en workflow maken moest je doen.

# **Operating with Infrastructure as Code** 

**Operate step** in DevOps: beheren/onderhouden van apps en infra in productie. Zorgen dat systeem soepel, efficiënt, betrouwbaar draait. **Infrastructure as Code (IaC)**: infra beheren via machine-readable files (code). Geen manuele processen. Maakt deployment/management consistent en betrouwbaar. Ondersteunt DevOps.

* **Automation**: sneller deployen/configureren.   
* **Collaboration**: config in version control (Git), teams kunnen samenwerken.   
* **Scalability**: infra als code, makkelijk resources op/neer schalen. 

**Docker Compose**: tool voor multi-container Docker apps. Gebruikt **YAML files** (docker-compose.yml). Definieert services (containers), networks, volumes. Blauwdruk voor app omgeving. docker compose up \-d start alles in detached mode. Resultaat is een **project**. Kan projectnaam aanpassen. Deployed components bekijken moesten we opzoeken. Waarom Docker Compose IaC is:

* **Declarative Configuration**: je beschrijft *wat* je wil (welke services, images, poorten), niet *hoe* het moet.   
* **Version Control & Collaboration**: file naast code, track changes met Git, makkelijk rollback.   
* **Automation & Reproducibility**: alles opzetten met 1 file, consistent elke keer.   
* **Scalability & Flexibility**: makkelijk aantal instances verhogen. docker compose up \--remove-orphans verwijdert containers die niet meer in de file staan. 

Dockerfiles in Docker Compose: build: . in docker-compose.yml laat Compose image bouwen vanuit Dockerfile. Als Dockerfile verandert, moet je docker compose build doen, anders gebruikt docker compose up de cache/oude image. Daarna docker compose up om nieuwe image te gebruiken. Containers kunnen communiceren. **Docker networks**: creëer netwerk zodat containers elkaar vinden. docker network create. Containers joinen netwerk met \--network flag. docker0 network is default, laat containers met buitenwereld praten, maar niet met elkaar. Eigen custom network in Compose: networks: my-network: driver: bridge. Bridge driver: containers op zelfde host kunnen praten. In Compose file, services specifiëren netwerk. Refereren kan met service naam binnen netwerk. depends\_on: in Docker Compose: zorgt dat een service pas start nadat een andere service succesvol gestart is. Nuttig voor afhankelijkheden (app hangt af van database).

Challenges deel 6: Docker commands naar Docker Compose. Grafana met env vars en restart policy. Scalen met ***docker compose up \--scale service\_name=count***. Poort range instellen in Compose. Volumes definiëren in Compose. MySQL met named volume in Compose. Mattermost met bind mount/host volume in Compose. Docker Network types (bridge, etc.), verschillen, uses moesten we opzoeken. Netwerk commando's moesten we opzoeken. WP \+ MySQL command line met network en volume moest je doen. Networks definiëren in Compose. API \+ DB met depends-on en volume in Compose. WP \+ MySQL in 1 Compose met network, volume, depends-on moest je doen.

# **Monitoring & More** 

**Monitoring** step in DevOps: track performance/health apps/systemen. Issues vroeg detecteren, downtime minimaliseren, security verbeteren. Detecteerde issues gaan terug naar **Plan** step. Vandaar infinity symbol. Monitoring in detail: **Logs, Metrics, Alerts**. **Logs**: chronologisch record van events. Tijd-gestempelde account. Essentieel voor: **Debugging**, **Performance Checking**, **Security Auditing**, **Compliance**, **Business Analytics**, **Incident Response**. Python logging module heeft levels: DEBUG (laagste, details), INFO (werkt goed), WARNING (potentieel probleem), ERROR (functie niet kunnen doen), CRITICAL (hoogste, programma stopt). Kan handlers gebruiken (FileHandler, StreamHandler) en formatters.

**Metrics**: kwantificeerbare metingen van performance/health **real-time**. Numerieke data. Voorbeelden: CPU usage, Memory Consumption, Network I/O, Disk I/O, Container Health. Meer technisch dan business goals. Netdata is voorbeeld monitoring tool. **Prometheus**: open-source monitoring/alerting toolkit. Verzamelt metrics als **time series data** (waarde \+ timestamp \+ labels). Features: **Metrics Collection** (scrape targets via HTTP endpoint), **Flexible Queries (PromQL)**, **Stand-alone Storage**, **Pull Model**, **Configurable Targets**. Werkt samen met FastAPI (app met /metrics endpoint), Prometheus (scrapt /metrics), Grafana (visualiseert data van Prometheus). Prometheus config in prometheus.yml. global: scrape\_interval default interval. scrape\_configs: jobs definiëren. job\_name, scrape\_interval, metrics\_path (default is /metrics), static\_configs: targets. Targets kunnen service namen in Docker network zijn. Grafana config: admin wachtwoord, datasources (Prometheus) definiëren, dashboards (JSON file). Deployen met Docker Compose. **KPIs (Key Performance Indicators)**: metrics gelinkt aan klantvragen/business goals. API KPIs: Response Time, Error Rate, Availability. **SLAs (Service Level Agreements)**: formele contracten met Service Levels. Service Levels: concrete standaarden (e.g. Response Time \< 300ms, Error Rate \< 1%, Availability \> 99.95%). KPIs zijn gelinkt aan Service Levels. Niet voldoen \= boetes.

# **Alerts** 

 notificaties getriggerd door metrics (thresholds overschrijden) of logs (specifieke foutmeldingen). Netdata toont alert status levels (Warning, Critical). Alerts pagina in Netdata demo.

Challenges deel 7: Grafana dashboard panel maken met Prometheus data (http requests by status code) moest je doen. Load testing: systeem belasten om performance/limieten te testen. Nuttig om te zien of het systeem standhoudt. Wanneer in DevOps Lifecycle? Vooral in Test/Operate? (Stond niet expliciet in bronnen). Locust: tool voor load testing in Python. Locust gebruiken om API te testen en verandering in Grafana te zien.


# **Docker Command** 

* docker run: **Start een nieuwe container**.   
  * \-d: **Draait de container op de achtergrond** (detached mode).   
  * \-it: **Geeft een interactieve terminal** (voor interactie met de container).   
  * \-p host-port:container-port: **Maakt een poort van de container beschikbaar op de hostmachine**. Dit is als een deurnummer op je huis (host) dat naar een deur in de container (container) leidt. Poortconflicten kunnen optreden als een host-poort al in gebruik is, wat opgelost kan worden door een andere host-poort te kiezen.   
  * \-e VARIABEL=WAARDE: **Stelt een omgevingsvariabele in** in de container. Dit wordt vaak gebruikt voor configuratie.   
  * \--name NAAM: **Geeft een naam aan de container**.   
  * \--network NETWERKNAAM: **Voegt een container toe aan een specifiek netwerk**.   
* docker ps: **Toont containers die momenteel actief zijn**.   
  * \-a: **Toont** *alle* **containers**, inclusief gestopte.   
* docker start CONTAINER\_ID\_of\_NAAM: **Start een container die eerder gestopt was**.   
* docker stop CONTAINER\_ID\_of\_NAAM: **Stopt een actieve container**.   
* docker rm CONTAINER\_ID\_of\_NAAM: **Verwijdert een gestopte container**.   
* docker exec \-it CONTAINER\_ID\_of\_NAAM commando: **Voert een commando uit in een** *reeds draaiende* **container**. Wordt vaak gebruikt met \-it voor interactie.   
* docker attach CONTAINER\_ID\_of\_NAAM: **Koppelt je terminal opnieuw aan de hoofdprocessen van een container**.   
* docker image pull IMAGE\_NAAM: **Haalt een container image op** van een registry (zoals Docker Hub).   
* docker image ls: **Toont lokaal beschikbare container images**.   
* docker build \-t NAAM:TAG PAD: **Bouwt een container image** vanuit een Dockerfile in het opgegeven pad. \-t geeft de naam en tag. . verwijst naar de huidige directory.   
* docker login: **Logt in op een Docker registry** (zoals Docker Hub).   
* docker push IMAGE\_NAAM:TAG: **Verzendt een lokaal gebouwde image naar een Docker registry**.   
* docker commit CONTAINER\_ID IMAGE\_NAAM: **Maakt een nieuwe image** van de wijzigingen in een container. Dit is een manier om images te maken vanuit een container-instantie (Instance Promotion).   
* docker image tag BRON\_IMAGE\_ID DOEL\_NAAM:TAG: **Geeft een naam en tag aan een bestaande image**.   
* docker diff CONTAINER\_ID: **Toont de wijzigingen** die gemaakt zijn in een container's filesystem.   
* docker history IMAGE\_NAAM: **Toont de lagen** waaruit een image is opgebouwd.   
* docker image inspect IMAGE\_NAAM: **Geeft gedetailleerde informatie** over een image.   
* docker network create: **Maakt een nieuw Docker netwerk aan**. 

## **Dockerfile Maken (De Blauwdruk)** 

 Een Dockerfile is een tekstbestand met instructies om automatisch een container image te bouwen.

* Het bestand heet meestal Dockerfile (geen extensie).

* Het bevat verschillende instructies per regel.

* **Belangrijke Instructies:**

  * ***FROM*** image:tag: **Start van een bestaande basis image** (bijv. ubuntu, python:3.9-slim, nginx, alpine). Dit is de eerste instructie.   
  * ***RUN*** commando: **Voert een commando uit tijdens het bouwen** van de image (bijv. software installeren). Wordt één keer uitgevoerd bij het bouwen.   
  * ***COPY*** bron doel: **Kopieert bestanden van je lokale machine naar de image**.   
  * ***WORKDIR*** pad: **Stelt de werkdirectory in** in de image voor volgende instructies.   
  * ***EXPOSE*** poort \[poort...\]: **Documenteert** welke netwerkpoorten de applicatie gebruikt, maar **maakt ze niet daadwerkelijk beschikbaar**. Dit moet gebeuren bij het docker run\-commando.   
  * ***CMD*** \["executable","param1","param2"\]: **Specificeert het standaardcommando** dat wordt uitgevoerd wanneer een container van deze image wordt gestart. Er kan maar één CMD zijn.   
  * ***ENTRYPOINT*** \["executable", "param1"\]: **Specificeert ook een commando** dat wordt uitgevoerd bij het starten van de container. Het verschil met CMD is subtiel en gerelateerd aan hoe argumenten worden verwerkt.   
  * ***ENV*** VARIABEL=WAARDE: **Stelt omgevingsvariabelen in** in de image. Deze kunnen overschreven worden bij docker run.   
  * ***ARG*** VARIABEL\[=DEFAULT\_WAARDE\]: **Definieert variabelen** die je kunt gebruiken **tijdens het** *bouwen* **van de image**.   
* **Images** worden in **lagen** gebouwd; elke **instructie** in de Dockerfile **voegt** een **laag toe**.

* Docker gebruikt caching: als een laag niet is gewijzigd, hergebruikt Docker de bestaande laag, wat het bouwproces versnelt.

## **Docker Compose (docker-compose.yml) Maken** 

 Docker Compose is een tool om **multi-container Docker applicaties te definiëren en uit te voeren**. Het gebruikt YAML-bestanden om de configuratie te beschrijven.

* Het configuratiebestand heet typisch docker-compose.yml.   
* Het definieert de verschillende services (containers), netwerken en volumes die nodig zijn voor de applicatie.   
* **Basis Structuur:**   
  * services:: **Definieert de verzameling containers** die deel uitmaken van de applicatie.   
    * servicenaam:: **De naam van een individuele container component**. Dit wordt gebruikt om containers naar elkaar te verwijzen binnen het Compose netwerk.   
      * image: image:tag: **Specificeert de image** om te gebruiken voor deze service.   
      * container\_name: naam: **Stelt een specifieke naam in** voor de container.   
      * ports:: **Maakt poorten beschikbaar** zoals bij docker run \-p. \- "host-port:container-port". Je kunt alleen de container-poort opgeven (\- "80") om Docker automatisch een vrije host-poort te laten toewijzen.   
      * environment:: **Stelt omgevingsvariabelen in** voor de container.   
      * volumes:: **Definieert volumes** om data op te slaan. Bijvoorbeeld .:/pad/in/containervoor een bind mount (host volume) ofvolumenaam:/pad/in/container\` voor een named volume.   
      * networks:: **Voegt de service toe aan een specifiek Docker netwerk**.   
      * build: PAD\_NAAR\_DOCKERFILE\_MAP: **Laat Docker Compose de image bouwen** vanuit een Dockerfile.   
      * depends\_on: \[servicenaam\]: **Zorgt ervoor dat deze service pas start nadat de afhankelijke service is gestart**.   
      * restart: unless-stopped: **Zorgt ervoor dat de container herstart** tenzij handmatig gestopt.   
  * networks:: **Definieert de Docker netwerken** die door de services worden gebruikt.   
    * netwerknaam:: **De naam van het netwerk**.   
    * driver: bridge: **Gebruikt het bridge-driver** (standaard), waarmee containers op dezelfde host met elkaar kunnen communiceren.   
    * ipam:: Optionele configuratie voor IP-adresbeheer, inclusief subnets. 

## **Command**  

  * docker compose up \-d: **Bouwt (indien nodig) en start de services** gedefinieerd in het docker-compose.yml\-bestand. \-d start op de achtergrond.   
  * docker compose build: **Bouwt alleen de images** voor de services met een build\-sectie.   
  * docker compose down: **Stopt en verwijdert de containers**, standaard netwerken en volumes.   
  * docker compose ps: **Toont de services** die draaien binnen het project.   
* Docker Compose wordt beschouwd als Infrastructure as Code (IaC) omdat je je infrastructuur (containers, netwerken etc.) definieert in een codebestand, wat zorgt voor automatisering, versiebeheer, en reproduceerbaarheid. 

[README](/README.md)
