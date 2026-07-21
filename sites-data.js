/**
 * Editable pilot-site content for the research findings map.
 *
 * Edit text between the backticks (`...`).
 * Add a new section by copying a { heading, text } block.
 * Coordinates must remain numbers, not quoted text.
 */
window.SITES = [
  {
    id: "delft",
    name: "Delft",
    country: "The Netherlands",
    assessed: true,
    coordinates: {
      latitude: 52.008825,
      longitude: 4.356578
    },
    summary: `A 'living lab' pilot at a TU Delft campus event space (Firma van Buiten) that adds an aquathermal system to an existing air-source heat pump setup, drawing heat from a shallow, low-flow drainage canal/pond to test aquathermal energy at small scale.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Supplies a medium-sized building with aquathermal energy from a shallow drainage canal/pond with a low flow rate. The building was originally designed and partly prepared for aquathermal energy, so the project builds on investments already made.`
      },
      {
        heading: "Governance",
        text: `TU Delft owns the plot and will own the aquathermal system; Firma van Buiten owns the building and will supply (purchase or generate via PV) the electricity for the system and use its heat.`
      },
      {
        heading: "Status",
        text: `Development phase - technical design and permit process.`
      },
      {
        heading: "Challenges",
        text: `Delays in proposal approval by the TU Delft Campus Innovation Committee (CIC), delays in finding project management capacity, and a prolonged permit procedure. Rising equipment and service costs (partly due to geopolitical factors) have largely used up the 15% contingency budget, raising the risk of a funding shortfall if the pilot runs over budget. Stakeholders have generally been positive, though there has been some resistance from a separate campus project implementing similar technology.`
      },
      {
        heading: "Good practice",
        text: `Recording baseline water temperatures a year before project start supported the permit request and enabled early discussions with the Water Board about plans and permits. Sharing experiences with other WaterWarmth pilots was valuable, as was securing effective, dedicated project management given the complexity of university administration.`
      },
      {
        heading: "Other heating sources",
        text: `No district heating network; the building already has air-source heat pump (ASHP) ceiling units, which will remain as a backup system.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `A project that framed aquathermal energy primarily as a technical or economic solution. Ethical dimensions (distributive justice, participation, benefits to vulnerable groups) were largely absent or secondary, and deferred to later project stages.`
      },
      {
        heading: "Knowledge availability",
        text: `Identified as an explicitly research-oriented case that embraced experimentation as part of its design. Institutional backing from TU Delft helped the project mobilize expertise and interpret regulatory requirements, so knowledge-related uncertainty did not become a binding constraint.`
      },
      {
        heading: "Risk perception",
        text: `Cited among projects with limited public engagement, where climate and energy risks were framed abstractly at a systems level rather than in locally meaningful terms — weakening the public's connection to the project's rationale.`
      },
      {
        heading: "Cultural values",
        text: `Named specifically as a case where social limitations were present in project dynamics without being explicitly identified or addressed by project actors; cultural values were not meaningfully assessed.`
      },
      {
        heading: "Overall assessment",
        text: `A pattern typical of institutionally embedded pilots in the study. Strong capacity to manage knowledge and regulatory complexity, but limited attention to ethical, risk-perception, and cultural dimensions of social resilience.`
      }
    ]
  },
  {
    id: "terherne",
    name: "Terherne",
    country: "The Netherlands",
    assessed: true,
    coordinates: {
      latitude: 53.041148,
      longitude: 5.775445
    },
    summary: `Terherne (Fryslân) is exploring aquathermal heating for around 100-120 homes and several large buildings in the village's old town, combining individual systems for waterfront homes with a possible small collective network. The project is led by a citizen energy cooperative in partnership with the municipality of De Fryske Marren.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Individual aquathermal systems drawing on the village's smaller inner waterways, with a possible collective system based entirely on aquathermal energy from the surrounding lakes.`
      },
      {
        heading: "Governance",
        text: `Run jointly by a citizen-led energy cooperative and the municipality of De Fryske Marren. Roles and responsibilities are not yet clearly divided; the municipality is still developing a formal position on heat networks generally, which will determine its role in developing and operating the Terherne system.`
      },
      {
        heading: "Status",
        text: `Exploratory - feasibility and business case studies are underway. Early findings point to a difficult business case.`
      },
      {
        heading: "Challenges",
        text: `The municipality was added to the project as something of an afterthought, without a clear implementation plan or defined role. It is difficult to assess the project's economic and social feasibility, partly because the partnering energy cooperative/community lacks a formal legal structure. There is also limited control over the timing of project activities, which has constrained communication for fear of raising community expectations prematurely. More broadly, the project lacks a clear problem-owner, the municipality's future role is uncertain, and initiators have limited capacity.`
      },
      {
        heading: "Good practice",
        text: `Use the first year of any aquathermal project to get everything in place - understand permitting and testing requirements before installation. Ensure stakeholders such as energy cooperatives fully understand project details to avoid unrealistic expectations. Determine each partner's desired role and responsibilities clearly from the outset, and avoid skipping preparatory steps.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `Highlighted as explicitly foregrounding inclusivity, energy autonomy, and long-term community benefit. Ethical goals shaped ownership models, ecosystem design, and decision-making from the outset, strengthening legitimacy and public trust. One of the study's clearest examples of ethics being actively addressed.`
      },
      {
        heading: "Knowledge availability",
        text: `Drawing on feasibility studies and interregional knowledge exchange (rather than direct institutional authority) to manage regulatory and technical uncertainty.`
      },
      {
        heading: "Risk perception",
        text: `Risk was framed in local, immediate, and experiential terms which the study associates with stronger community support and engagement.`
      },
      {
        heading: "Cultural values",
        text: `Its citizen-led cooperative framing is highlighted as directly addressing ethical and cultural dimensions from project inception; in contrast to more institutionally driven pilots where these dimensions went unaddressed.`
      },
      {
        heading: "Overall assessment",
        text: `Presented as the strongest example in the study of community-led governance successfully addressing ethical, cultural, and risk-perception dimensions of social resilience — though the study notes (via the Middelfart comparison) that community legitimacy alone does not guarantee institutional or financial viability.`
      }
    ]
  },
  {
    id: "middelfart",
    name: "Middelfart",
    country: "Denmark",
    assessed: true,
    coordinates: {
      latitude: 55.495943,
      longitude: 9.721228
    },
    summary: `Middelfart (Denmark) began as a citizen-led cooperative project in the villages of Fjelsted and Harndrup, aiming to phase out oil/gas boilers for around 300 households, but it collapsed after a national dispute over whether aquathermal 'Thermonet' technology would qualify for heating-act loan guarantees. The municipality has since piloted a smaller aquathermal system at a protected former firefighting pond, and continues to support cooperative aquathermal development in other villages.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Danish municipalities are responsible for local heat and energy planning. Middelfart (about 40,000 inhabitants) is committed to replacing fossil-fuel heating and cooling with sustainable alternatives, and already hosts one of Denmark's first fifth-generation district heating systems using aquathermal energy. The municipality has experience disseminating and sharing this knowledge internationally, and won the 2022 European Destination of Excellence (EDEN) award.`
      },
      {
        heading: "Governance",
        text: `Originally a community-driven initiative structured as a cooperative, open to all interested neighbours in Fjelsted-Harndrup. The municipality also supports villages Føns and Brenderup in exploring their own aquathermal potential.`
      },
      {
        heading: "Status",
        text: `The original 300-household cooperative project collapsed; a smaller alternative pilot (Plan B) is now underway at a former firefighting pond, with baseline measurements and sensors installed. The municipality is developing a business plan to identify the most suitable renewable system (heat pumps, district heating, aquathermal, Thermonet, biomass, etc.) under Danish law.`
      },
      {
        heading: "Challenges",
        text: `A national-level dispute over amendments to the Danish Heat Supply Act - specifically whether 'Thermonet' (an aquathermal-based technology) would be covered - created uncertainty over access to municipality-guaranteed loans. This uncertainty led the citizen cooperative to abandon the original project, even though the disputed change was later adopted in the cooperative's favour by Parliament. A follow-on plan to purchase roughly 14 hectares of land and lakes for a smaller Thermonet system also fell through, mainly due to poor municipal land management. The current smaller pilot, though below the energy-demand threshold that triggers the Heating Act, still faces regulatory hurdles under environmental law. Aligning the many stakeholders and community members involved also proved difficult, and the Danish Energy Agency's limited understanding of the technology restricted access to financial guarantees.`
      },
      {
        heading: "Good practice",
        text: `Involve a range of internal and external actors early to build project support. Record baseline water/pond temperatures before implementation, and factor this into early project planning. Technical and legislative barriers require resilient, courageous leadership able to sustain a project through setbacks.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `Highlighted as explicitly foregrounding inclusivity, energy autonomy, and long-term community benefit in its original cooperative model, which built strong public legitimacy and trust.`
      },
      {
        heading: "Knowledge availability",
        text: `The study's key example of knowledge availability becoming a binding social limitation. The original project could not proceed due to unresolved uncertainty over national aquathermal/Thermonet permitting policy under the Danish Heat Supply Act — a constraint that emerged even though ethical, cultural, and risk-perception dimensions were otherwise well managed.`
      },
      {
        heading: "Risk perception",
        text: `Local, immediate risk framing (protecting affordable heating and community autonomy) is cited as contributing to the strong public momentum the original 300-household project achieved.`
      },
      {
        heading: "Cultural values",
        text: `Strong local identity and a tradition of collective action supported high initial social acceptance; the project's eventual collapse is attributed to regulatory/knowledge barriers rather than cultural misalignment.`
      },
      {
        heading: "Overall assessment",
        text: `A cautionary case in the study. Strong community legitimacy and ethical/cultural alignment were not sufficient on their own; unresolved national-level regulatory uncertainty became the binding constraint that caused the original project to collapse.`
      }
    ]
  },
  {
    id: "ouistreham",
    name: "Ouistreham",
    country: "France",
    assessed: true,
    coordinates: {
      latitude: 49.280119,
      longitude: -0.250729
    },
    summary: `Ouistreham (Normandy, France) is installing a closed-loop seawater aquathermal system to heat and cool 'Le CANO', a water sports and safety centre, drawing on the region's roughly 600 km of coastline. The pilot is owned by the City of Ouistreham and delivered under the supervision of Ports de Normandie.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Supplies aquathermal energy to a building dedicated to water sports and safety activities, using seawater - chosen because Normandy's extensive coastline (around 600 km) is an important regional resource.`
      },
      {
        heading: "Governance",
        text: `The pilot is owned by the City of Ouistreham; the company BUILDERS manages implementation, and Ports de Normandie is the local authority approving works and modifications to the area. Other key stakeholders include DDTM14 (Calvados Departmental Directorate for Territories and the Sea), the harbour master's office (Capitainerie), the Normandy Region, and Caen-la-Mer.`
      },
      {
        heading: "Status",
        text: `Development/implementation phase - permits are agreed and the site is approved; construction is underway. Work inside the building began in September 2024 (marked by a press visit on 30 September), excavation to connect the heat exchanger to the building began in November 2024, and the heat exchanger was due for installation by end of 2025.`
      },
      {
        heading: "Challenges",
        text: `The permit process was difficult and tricky before approval. Corrosion issues required an extra €100,000 in budget for equipment, offset by reducing staff costs to keep the overall project within budget. The project must also account for environmental impacts (positive and negative), and possible delays from tides or scheduling.`
      },
      {
        heading: "Good practice",
        text: `Support from the Mayor of Ouistreham was crucial in convincing other stakeholders to join the project. Identifying an engaged energy company to work with (Elairgie, which had already worked on the site) was essential, as was knowing who to approach for specific obstacles. Support from the WaterWarmth lead partner helped resolve overarching issues such as financing. As results come in from this single-building pilot, the team plans to use them to help convince local authorities to support aquathermal energy more broadly; some authorities are already interested in the outputs.`
      },
      {
        heading: "Other heating sources",
        text: `No district heating network; the building already has an air-source heat pump, which will be retained so its performance can be compared with the new aquathermal system.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `A project that framed aquathermal energy primarily as a technical or economic solution, with ethical dimensions (distributive justice, participation) treated as secondary or deferred.`
      },
      {
        heading: "Knowledge availability",
        text: `Identified as an explicitly research-oriented, experimentation-embracing case. Institutional backing from the port authority is credited with helping mobilize expertise and interpret permitting requirements, limiting knowledge-related uncertainty as a barrier.`
      },
      {
        heading: "Risk perception",
        text: `Cited among cases where risk was framed in local, immediate, experiential terms (e.g. protecting the water-sports facility and its use), which the study associates with stronger community support relative to more abstract institutional risk framing seen elsewhere.`
      },
      {
        heading: "Cultural values",
        text: `The project's alignment with the region's identity around water, coastal life, and tourism is cited as a factor supporting social acceptance; aquathermal energy's 'invisible infrastructure' quality is noted as helping preserve local place identity without disruption.`
      },
      {
        heading: "Overall assessment",
        text: `Institutional strength (port authority backing) reduced knowledge barriers, and alignment with regional water/coastal identity supported cultural and risk-perception legitimacy - though, as with other institution-led pilots in the study, ethical and participatory dimensions remained secondary.`
      }
    ]
  },
  {
    id: "mechelen",
    name: "Mechelen",
    country: "Belgium",
    assessed: true,
    coordinates: {
      latitude: 51.011118,
      longitude: 4.49375
    },
    summary: `The Mechelen pilot combines aquathermal and geothermal energy from the Leuven-Dijle canal to provide fossil-free heating for a planned new residential development at the Ragheno site. The City of Mechelen, a frontrunner in local sustainable heating, is advocating for the project despite lacking property rights on the site.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Uses aquathermal energy, combined with geothermal borehole thermal energy storage (BTES), from the Leuven-Dijle canal to provide fossil-free heating for the new Ragheno development next to the canal.`
      },
      {
        heading: "Governance",
        text: `The City of Mechelen does not hold property rights at Ragheno, which limits its influence over the site. Mechelen is the only local authority currently part of a Flemish policy working group led by VWW (Flemish Waterways), and is home to Klimaan, a growing local energy cooperative enabling citizens to invest in renewable energy projects. A separate, smaller pilot is also planned within the city.`
      },
      {
        heading: "Status",
        text: `Feasibility study completed; next step is to present the results to the project developer.`
      },
      {
        heading: "Challenges",
        text: `Initial scepticism from municipal decision-makers, partly because district heating is often seen as financially insecure; a feasibility study found heat networks were not straightforwardly viable at Ragheno, though the city continues to advocate for the project. Financial and policy support for heat networks remains minimal, and local authorities are largely bypassed under Flemish energy regulation, which requires feasibility studies to be filed directly with the Flemish Energy and Climate Agency without local input. Energy regulation is also poorly integrated with spatial, water, and environmental policy, and the 2021 gas ban has tended to push developers toward individual air-source heat pumps rather than collective systems. There are also concerns that sustainability messaging around Ragheno leans toward greenwashing rather than substantive energy development.`
      },
      {
        heading: "Good practice",
        text: `Convince the developer to incorporate aquathermal energy into the site's energy concept, potentially with additional upfront investment. Consider extending the heat network to existing buildings. Setting up a dedicated policy working group was valuable given the lack of an existing regulatory framework - a co-creative approach worked best.`
      },
      {
        heading: "More information",
        text: `Mechelen is Flanders' fifth-largest city, with around 87,000 inhabitants, located in the Rivierenland region.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `Framing aquathermal energy primarily as a technical or economic solution; ethical dimensions such as distributive justice and participation were largely absent or secondary.`
      },
      {
        heading: "Knowledge availability",
        text: `Municipal institutional involvement is credited with helping interpret regulatory and permitting complexity, though Mechelen is specifically flagged as a case where broader social limitations went unrecognized by project actors.`
      },
      {
        heading: "Risk perception",
        text: `Cited among projects with limited community engagement, where climate and energy risks were framed abstractly at a systems level rather than in terms that resonated with local, lived experience.`
      },
      {
        heading: "Cultural values",
        text: `A case where social limitations were present in project dynamics without being identified or addressed - cultural values were not meaningfully assessed during planning.`
      },
      {
        heading: "Overall assessment",
        text: `Institutional capacity supported navigation of regulatory complexity, but the study flags Mechelen as a case where ethical, risk-perception, and cultural dimensions of social resilience remained largely invisible to project actors - consistent with its broader pattern of institution-led pilots.`
      }
    ]
  },
  {
    id: "kortrijk",
    name: "Kortrijk",
    country: "Belgium",
    assessed: true,
    coordinates: {
      latitude: 50.82697,
      longitude: 3.260799
    },
    summary: `Howest University of Applied Sciences (Kortrijk, Belgium) is piloting aquathermal energy combined with geothermal energy at the Kaai City development on the Leie river, using river water to regenerate a geothermal borehole field. The pilot centres on a 127-room student accommodation building within the wider mixed-use development.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Kaai City is a mixed-use development (student housing, university buildings, apartments, and offices, around 18,000 m²) on Havenkaai in Kortrijk, on the banks of the Leie. Aquathermal energy is used to regenerate the soil temperature in a geothermal borehole field and to store heat extracted from the Leie when river temperatures are high enough, extending the field's lifetime. In spring and autumn, river water is used directly for heating/cooling via floor heating; in winter, heating comes solely from the geothermal field; in summer, heat from the river is stored in the borehole field as a thermal battery for later use.`
      },
      {
        heading: "Governance",
        text: `A public-private partnership between developer CAAAP and Howest. Investors are building the site; an ESCo (energy service company) has been appointed, and an energy cooperative is being established to manage the district heating network.`
      },
      {
        heading: "Status",
        text: `Development phase. Technical reports on the surface-water heat pump (SWHP) and ground-source heat pump (GSHP) systems have been completed; integration of aquathermal energy into the district heating network is still under research. The student accommodation (127 rooms) is expected to be completed by fall 2025, with system commissioning from June 2025 for the 2025-2026 heating season.`
      },
      {
        heading: "Challenges",
        text: `Convincing investors to implement aquathermal energy; maintaining communication across the roughly six stakeholders active on site; high permit costs from water authorities, partly due to the difficulty and expense of measuring the water temperature difference before and after system operation (capped at a maximum 3°C difference); estimating the production-to-consumption energy ratio, which led to a revised (lower) charge for student housing but an overestimated one for the school; and a Non-Disclosure Agreement among some stakeholders that limited free information-sharing early in the project (since resolved).`
      },
      {
        heading: "Good practice",
        text: `Involve all stakeholders from project inception, backed by signed working agreements to ensure accountability and shared ownership. Maintain thorough documentation of project activities to support learning and knowledge-sharing. Clearly explain the concept of niche innovations like aquathermal energy to stakeholders, since the technology is not yet well understood.`
      },
      {
        heading: "Water source",
        text: `The Leie river has a stable flow, a limited 2-metre seasonal water-level variation, and seasonal temperatures ranging from around 2-30°C, making it well suited to aquathermal energy - though past pollution means abstraction is now costly and subject to extensive monitoring and reporting requirements.`
      }
    ],
    findings: [
      {
        heading: "Ethical considerations",
        text: `Framed aquathermal energy primarily as a technical or economic solution; ethical dimensions were largely absent or secondary, with distributive-justice questions deferred to later project stages or higher governance levels.`
      },
      {
        heading: "Knowledge availability",
        text: `Institutional backing from Howest and its developer partnership is credited (in line with other institutionally embedded cases) with supporting navigation of technical and regulatory complexity, including permitting and system integration.`
      },
      {
        heading: "Risk perception",
        text: `Cited among projects with limited community engagement, where climate and energy risks were framed abstractly at a systems level, weakening the public's connection to the project's rationale.`
      },
      {
        heading: "Cultural values",
        text: `Named explicitly as a case where social limitations were present in project dynamics without being identified or addressed - cultural values were not meaningfully assessed.`
      },
      {
        heading: "Overall assessment",
        text: `Strong institutional and technical capacity, but ethical, risk-perception, and cultural dimensions remained largely unaddressed.`
      }
    ]
  },
  {
    id: "gent",
    name: "Gent",
    country: "Belgium",
    assessed: false,
    coordinates: {
      latitude: 51.049922,
      longitude: 3.731184
    },
    summary: `Energent, a citizen-led energy cooperative in Ghent, is developing a concept plan to use aquathermal energy from a canal to heat new homes and apartments in the Muide district, and to explore the role energy cooperatives can play in rolling out local heating networks.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `Energent is drawing up a concept plan to use aquathermal energy as a heat source for new residential buildings (mainly apartments, around 1 MW peak thermal power) in the Muide district of Ghent. The Muide sits next to a large canal with enough potential to heat a large number of homes via heat pump technology.`
      },
      {
        heading: "Governance",
        text: `Energent CV is a citizen-led energy cooperative based in Ghent, whose shareholders invest in sustainable projects such as solar, wind, and heat.`
      },
      {
        heading: "Status",
        text: `Studies and activities are underway to develop a project concept, project plan, and business case, aiming to clarify the technical requirements, profitability, and legal framework for aquathermal heating networks.`
      },
      {
        heading: "Challenges",
        text: `Difficulty predicting project costs without a complete business plan. Initial difficulty accessing underground pipe network plans from the city (since resolved, with plans now shared). A Non-Disclosure Agreement initially limited free information-sharing among stakeholders (also since resolved). Not all required experts are yet in place, due to project delays. There is also some uncertainty about the potential impact of local politics on the project, though no major changes are expected given continuity in city government.`
      },
      {
        heading: "Good practice",
        text: `Structured, positive communication with clearly defined project expectations has been valued by stakeholders, as has visible expert knowledge. Securing financial support - such as the WaterWarmth project's coverage of development-phase costs - builds stakeholder confidence and encourages others to get involved without needing to invest money themselves.`
      }
    ],
    findings: [
    ]
  },
  {
    id: "mechelen-de-borght",
    name: "Mechelen De Borght",
    country: "Belgium",
    assessed: false,
    coordinates: {
      latitude: 51.02364,
      longitude: 4.485086
    },
    summary: `In Mechelen, near the River Dijle in the Nekkerspoel district, the nineteenth-century castle estate De Borght is being restored after fifty years of vacancy. The restored castle will be heated using aquathermal energy drawn from the water in its moat. This smaller, complementary site is still in the development stage and has not yet been formally assessed as a WaterWarmth pilot.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `The historic 19th-century castle estate De Borght, in the Nekkerspoel district of Mechelen near the River Dijle, is being restored after fifty years of vacancy. Both the castle and its surrounding park are being returned to their former state. The restored castle building will be heated using aquathermal energy drawn from the water in the estate's moat.`
      },
      {
        heading: "Governance",
        text: `Not yet documented for this site.`
      },
      {
        heading: "Status",
        text: `Development stage; this is a smaller, complementary site to the main Mechelen (Ragheno) pilot and has not yet been formally assessed as part of the WaterWarmth pilot programme. Further details will be added as the project develops.`
      }
    ],
    findings: [
    ]
  },
  {
    id: "baard",
    name: "Baard",
    country: "The Netherlands",
    assessed: false,
    coordinates: {
      latitude: 53.141606,
      longitude: 5.669182
    },
    summary: `Baard (Fryslân, Netherlands) is developing a closed-system aquathermal heating network for five to nine privately owned homes and the village primary school, extracting heat from the Baarder Feart river via heat-exchange sheet piles that also reinforce the quay.`,
    projectDetails: [
      {
        heading: "Overview",
        text: `A closed-system aquathermal project extracting heat from the Baarder Feart river, which borders the connected homes and the village school. Innovative steel sheet piles with the aquathermal system built in are used, allowing the quay to be reinforced and the aquathermal system installed at the same time; the piles have a long lifespan. Each connected building will have its own heat pump, drawing on a shared closed heat-exchange system (such as MEFA) as the source, with a planned geothermal storage element to buffer summer heat for use in winter.`
      },
      {
        heading: "Governance",
        text: `Organised via multiple stakeholder ownership, expected to evolve into a formal energy community.`
      },
      {
        heading: "Status",
        text: `Tender phase, with construction expected to start later in the year; the project is under development, including setting up ownership rules and legal affairs.`
      },
      {
        heading: "Challenges",
        text: `Cheap fossil fuels, sustained by subsidies, create unfair competition for the renewable alternative the project wants to implement - compounded by a lack of bank and technical guarantees for aquathermal installations, since financial organisations have limited trust in and information about the technology. High installation costs are a further barrier to full-scale implementation, and some social housing stakeholders have been reluctant to participate due to high capital costs and the renovations the technology would require. Organising the project and securing project funding - rather than the technology itself - has been the most demanding part of the work, and seeing it through to completion will take sustained effort.`
      },
      {
        heading: "Good practice",
        text: `Communicate extensively and clearly about project progress, since households can misinterpret or misunderstand unfamiliar technical information. Close collaboration with local residents and strong coordination from the municipality have both been essential.`
      },
      {
        heading: "Other heating sources",
        text: `Relies on renewable local electricity, supported by strong local expertise among installers of the technical equipment.`
      }
    ],
    findings: [
    ]
  }
];
