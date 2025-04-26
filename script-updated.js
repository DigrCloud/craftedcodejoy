// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const headerScrollThreshold = 50;

    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Modal elements
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card .read-more');
    
    // Blog cards
    const blogCards = document.querySelectorAll('.blog-card .read-more');
    
    // Referral system
    const referralBtn = document.getElementById('referral-btn');
    const submitReferralBtn = document.getElementById('submit-referral');
    const referralCodeInput = document.getElementById('referral-code');
    const referralError = document.getElementById('referral-error');
    const membershipSection = document.getElementById('membership');
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');

    // Scroll event for header
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerScrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Trigger header check on page load
    if (window.scrollY > headerScrollThreshold) {
        header.classList.add('scrolled');
    }

    // Add mobile contact link if not exists
    if (navLinks && !document.querySelector('.mobile-contact-link')) {
        const mobileContactLink = document.createElement('li');
        mobileContactLink.className = 'mobile-contact-link';
        mobileContactLink.innerHTML = '<a href="#contact">Contact Us</a>';
        navLinks.appendChild(mobileContactLink);
    }

    // Mobile menu toggle - FIXED VERSION
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            this.classList.toggle('active');
            
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (hamburger && navLinks) {
                if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
        
        // Close menu when clicking on a link
        if (navLinks) {
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    // Close modal function
    function closeModal() {
        modalContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Open modal with content
    function openModal(content) {
        modalBody.innerHTML = content;
        modalContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Add close event listeners for modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Service Modal Content
    const serviceContent = {
        'career-coaching': {
            title: 'Career Coaching',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Transform Your Tech Career</h3>
                <p>Our personalized career coaching is designed specifically for technology professionals looking to advance their careers, transition to new roles, or navigate the complex tech landscape.</p>
                
                <h3>What Our Career Coaching Includes:</h3>
                <ul>
                    <li><strong>Career Path Planning:</strong> Create a strategic roadmap for your long-term career growth in technology.</li>
                    <li><strong>Skills Assessment:</strong> Identify your strengths, weaknesses, and the critical skills needed for your dream role.</li>
                    <li><strong>Personalized Guidance:</strong> Work one-on-one with experienced tech leaders who have walked the path before you.</li>
                    <li><strong>Interview Preparation:</strong> Master technical interviews and behavioral questions through mock interviews and feedback.</li>
                    <li><strong>Negotiation Coaching:</strong> Learn advanced techniques for negotiating salary, benefits, and promotions.</li>
                </ul>
                
                <h3>Our Approach</h3>
                <p>We believe in personalized coaching that adapts to your unique career goals and challenges. Our coaches have extensive experience in the tech industry and can provide insider insights and practical advice tailored to your situation.</p>
                
                <h3>Success Stories</h3>
                <p>Our coaching has helped countless professionals land positions at leading tech companies, transition from individual contributor to leadership roles, and significantly increase their earnings. Join them by taking the first step today.</p>
            `
        },
        'job-search': {
            title: 'Job Search Strategies',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Master the Tech Job Market</h3>
                <p>Our Job Search Strategies service equips you with proven techniques to stand out in the competitive tech job market and land offers from top companies.</p>
                
                <h3>Our Comprehensive Approach:</h3>
                <ul>
                    <li><strong>Resume Optimization:</strong> Transform your resume with ATS-friendly formatting and impactful content that highlights your technical achievements.</li>
                    <li><strong>LinkedIn Mastery:</strong> Optimize your profile to attract recruiters and build a powerful professional network.</li>
                    <li><strong>Job Search Automation:</strong> Learn efficient techniques to find and apply for positions that match your skills and career goals.</li>
                    <li><strong>Application Tracking:</strong> Implement systems to manage your job search pipeline effectively.</li>
                    <li><strong>Technical Portfolio Development:</strong> Create showcase projects that demonstrate your skills to potential employers.</li>
                </ul>
                
                <h3>Personalized Job Search Plan</h3>
                <p>We'll create a customized job search strategy based on your career goals, technical skills, and target companies. This strategic approach saves time and increases your chances of landing interviews at companies you're excited about.</p>
                
                <h3>Results-Oriented Methodology</h3>
                <p>Our clients typically see a 3-5x increase in response rates from applications and significantly shorter job search timelines. We focus on practical, actionable strategies that get real-world results.</p>
            `
        },
        'personal-branding': {
            title: 'Personal Branding Guidance',
            image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Build Your Tech Industry Presence</h3>
                <p>In today's digital world, your personal brand can open doors to opportunities that your resume alone cannot. Our Personal Branding Guidance helps you develop a compelling professional identity that gets you noticed in the tech industry.</p>
                
                <h3>Our Personal Branding Services Include:</h3>
                <ul>
                    <li><strong>Brand Strategy Development:</strong> Define your unique value proposition and professional narrative.</li>
                    <li><strong>Online Presence Optimization:</strong> Create cohesive profiles across platforms that highlight your expertise.</li>
                    <li><strong>Content Strategy:</strong> Develop a plan for sharing your knowledge and insights with the tech community.</li>
                    <li><strong>Thought Leadership Positioning:</strong> Establish yourself as an authority in your technical specialty.</li>
                    <li><strong>Visual Identity:</strong> Create a consistent and professional visual presentation across all platforms.</li>
                </ul>
                
                <h3>Why Personal Branding Matters in Tech</h3>
                <p>A strong personal brand leads to more inbound opportunities, higher compensation offers, and greater career resilience. In the competitive tech landscape, it's often what differentiates top professionals from their equally qualified peers.</p>
                
                <h3>Tailored to Your Career Goals</h3>
                <p>Whether you're looking to become a recognized expert in your field, transition to a leadership role, or build a side business, we'll customize our branding strategies to align with your specific objectives.</p>
            `
        },
        'networking': {
            title: 'Networking Strategies',
            image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Connect Strategically in the Tech Ecosystem</h3>
                <p>Effective networking is about building meaningful professional relationships that accelerate your career growth. Our Networking Strategies service helps you connect with the right people in your industry and make lasting impressions.</p>
                
                <h3>Strategic Networking Components:</h3>
                <ul>
                    <li><strong>Network Mapping:</strong> Identify the key connections and communities most valuable for your career goals.</li>
                    <li><strong>Relationship Building Framework:</strong> Learn how to cultivate authentic professional relationships over time.</li>
                    <li><strong>Tech Conference Strategy:</strong> Maximize your time at industry events with targeted networking plans.</li>
                    <li><strong>Digital Networking Mastery:</strong> Build relationships through online communities, social media, and virtual events.</li>
                    <li><strong>Follow-up Systems:</strong> Implement practices to maintain and strengthen your professional network.</li>
                </ul>
                
                <h3>Beyond Small Talk</h3>
                <p>We focus on strategic networking that goes beyond superficial conversations. Learn how to have meaningful exchanges that lead to mentorship opportunities, job referrals, business partnerships, and knowledge sharing.</p>
                
                <h3>For Introverts and Extroverts Alike</h3>
                <p>Our strategies are adaptable to different personality types. Whether you thrive in large group settings or prefer one-on-one conversations, we'll help you leverage your natural strengths for effective networking.</p>
            `
        },
        'skill-development': {
            title: 'Skill Development Resources',
            image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Accelerate Your Technical Growth</h3>
                <p>Stay ahead in the rapidly evolving tech landscape with our curated learning paths and skill development resources. We help you identify and acquire the most in-demand technical and soft skills for your career trajectory.</p>
                
                <h3>Comprehensive Skill Development Offerings:</h3>
                <ul>
                    <li><strong>Personalized Learning Paths:</strong> Custom skill development plans based on your career goals and current capabilities.</li>
                    <li><strong>Curated Resource Library:</strong> Access to high-quality courses, tutorials, and practice materials for technical skill building.</li>
                    <li><strong>Project-Based Learning:</strong> Hands-on projects that reinforce new skills and build your portfolio simultaneously.</li>
                    <li><strong>Skill Gap Analysis:</strong> Identify critical skills needed for your target roles and focus your learning efficiently.</li>
                    <li><strong>Learning Accountability:</strong> Progress tracking and check-ins to ensure consistent skill development.</li>
                </ul>
                
                <h3>Beyond Technical Skills</h3>
                <p>While we emphasize technical competencies, we also focus on the crucial soft skills that differentiate great tech professionals: communication, collaboration, problem-solving, and leadership abilities that complement your technical expertise.</p>
                
                <h3>Industry-Aligned Learning</h3>
                <p>Our skill development resources are continuously updated to reflect current industry demands and emerging technologies, ensuring you're learning what actually matters in today's job market.</p>
            `
        },
        'growth-marketing': {
            title: 'Growth Marketing as a Service',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Data-Driven Business Growth</h3>
                <p>Our Growth Marketing service helps businesses scale their digital presence and drive measurable results through innovative, data-backed strategies tailored to your specific objectives.</p>
                
                <h3>Comprehensive Growth Marketing Solutions:</h3>
                <ul>
                    <li><strong>Growth Strategy Development:</strong> Create a comprehensive roadmap for acquiring and retaining customers.</li>
                    <li><strong>Acquisition Channel Optimization:</strong> Identify and scale the most effective channels for your business.</li>
                    <li><strong>Conversion Rate Optimization:</strong> Improve every step of your funnel to maximize conversions.</li>
                    <li><strong>Customer Lifecycle Marketing:</strong> Develop strategies for onboarding, retention, and expansion.</li>
                    <li><strong>Analytics & Measurement:</strong> Implement robust tracking and reporting to guide decision-making.</li>
                </ul>
                
                <h3>Our Growth Framework</h3>
                <p>We follow a systematic process that includes in-depth audience research, rapid experimentation, data analysis, and continuous optimization. This iterative approach allows us to find scalable growth levers quickly.</p>
                
                <h3>Industry Expertise</h3>
                <p>Our team has specific experience growing businesses in SaaS, e-commerce, fintech, and other tech-enabled sectors. We understand the unique challenges and opportunities in your industry and can apply proven strategies from day one.</p>
                
                <h3>Technology-Powered</h3>
                <p>We leverage the latest marketing technology stack to implement, automate, and scale your growth initiatives, ensuring efficient execution and accurate measurement.</p>
            `
        },
        'conversion-optimization': {
            title: 'Conversion Optimization',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            description: `
                <h3>Transform Visitors into Customers</h3>
                <p>Our Conversion Optimization service helps you maximize the value of your existing traffic by systematically improving your website, landing pages, and overall user experience to drive higher conversion rates.</p>
                
                <h3>Comprehensive Optimization Process:</h3>
                <ul>
                    <li><strong>Conversion Audit:</strong> In-depth analysis of your current conversion funnel to identify leaks and opportunities.</li>
                    <li><strong>User Behavior Analysis:</strong> Understand how visitors interact with your site through heatmaps, session recordings, and user testing.</li>
                    <li><strong>A/B Testing Strategy:</strong> Develop a prioritized testing roadmap based on potential impact and implementation effort.</li>
                    <li><strong>Experiment Design & Execution:</strong> Create and deploy statistically valid tests to improve conversion elements.</li>
                    <li><strong>Continuous Optimization:</strong> Implement a system for ongoing testing and improvement.</li>
                </ul>
                
                <h3>Data-Backed Approach</h3>
                <p>We make decisions based on real user data, not assumptions. Our optimization process combines quantitative analytics with qualitative insights to understand not just what's happening, but why it's happening.</p>
                
                <h3>Beyond Surface-Level Changes</h3>
                <p>While we optimize tactical elements like headlines, CTAs, and form fields, we also focus on deeper conversion factors: your value proposition, messaging hierarchy, trust signals, and overall user experience.</p>
                
                <h3>Measurable Results</h3>
                <p>Our conversion optimization service typically yields 15-50% improvements in key conversion metrics, translating directly to increased revenue without additional marketing spend.</p>
            `
        }
    };

    // Blog post content
    const blogContent = {
        'ai-career': {
            title: 'Emerging AI Career Paths in 2025',
            image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            summary: 'Discover the most promising career opportunities in the rapidly evolving field of artificial intelligence.',
            content: `
                <div class="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul class="toc-links">
                        <li><a href="#section1"><i class="fas fa-angle-right"></i> The AI Revolution in 2025</a></li>
                        <li><a href="#section2"><i class="fas fa-angle-right"></i> Top 5 Emerging AI Career Paths</a></li>
                        <li><a href="#section3"><i class="fas fa-angle-right"></i> Skills Required for AI Careers</a></li>
                        <li><a href="#section4"><i class="fas fa-angle-right"></i> Education and Training Pathways</a></li>
                        <li><a href="#section5"><i class="fas fa-angle-right"></i> Salary Expectations and Job Market</a></li>
                        <li><a href="#section6"><i class="fas fa-angle-right"></i> How to Position Yourself for Success</a></li>
                    </ul>
                </div>

                <div class="modal-blog-content-text">
                    <h3 id="section1">The AI Revolution in 2025</h3>
                    <p>Artificial Intelligence has evolved far beyond its early applications, becoming deeply integrated into virtually every industry. In 2025, we're seeing AI technologies that not only automate routine tasks but increasingly handle complex decision-making processes that were once the exclusive domain of human experts.</p>
                    <p>This rapid advancement has created unprecedented demand for professionals who can develop, implement, and manage AI systems. According to recent industry reports, the global AI market is projected to reach $190 billion by 2026, with job growth in the sector outpacing almost every other technology field.</p>
                    
                    <h3 id="section2">Top 5 Emerging AI Career Paths</h3>
                    <p><strong>1. AI Ethics Consultant</strong><br>As AI systems gain more autonomy in critical decisions, organizations are increasingly hiring specialists who ensure these systems operate ethically. AI Ethics Consultants develop frameworks for responsible AI deployment, conduct algorithmic audits for bias, and help companies navigate the complex regulatory landscape surrounding AI.</p>
                    
                    <p><strong>2. Conversational AI Architect</strong><br>Beyond simple chatbots, Conversational AI Architects design sophisticated AI systems capable of natural, contextual interactions across multiple channels. These specialists combine linguistics, psychology, and advanced NLP to create AI personalities that represent brands and handle complex customer interactions.</p>
                    
                    <p><strong>3. AI Operations (AIOps) Engineer</strong><br>As AI systems become mission-critical infrastructure, AIOps Engineers ensure these systems remain reliable, efficient, and secure. They build monitoring systems, implement continuous learning pipelines, and manage the infrastructure that supports enterprise AI applications.</p>
                    
                    <p><strong>4. Industry-Specific AI Specialist</strong><br>From healthcare and finance to legal and education, organizations need AI specialists who understand both the technology and the specific domain context. These hybrid roles combine deep industry knowledge with AI expertise to develop specialized applications.</p>
                    
                    <p><strong>5. Human-AI Collaboration Designer</strong><br>As AI becomes a "teammate" rather than just a tool, these professionals design workflows and systems that optimize the complementary strengths of humans and AI. They focus on creating interfaces and processes that make AI capabilities accessible to non-technical professionals.</p>
                    
                    <h3 id="section3">Skills Required for AI Careers</h3>
                    <p>Success in AI careers requires a blend of technical expertise, domain knowledge, and interpersonal skills:</p>
                    <ul>
                        <li><strong>Technical Foundation:</strong> Programming (Python, R), statistics, machine learning algorithms, neural network architectures</li>
                        <li><strong>Data Skills:</strong> Data preparation, feature engineering, working with structured and unstructured data</li>
                        <li><strong>MLOps:</strong> Model deployment, monitoring, scaling AI systems</li>
                        <li><strong>Business Acumen:</strong> Understanding business requirements, translating them into technical solutions</li>
                        <li><strong>Ethics & Responsibility:</strong> Awareness of bias, privacy issues, and ethical implications</li>
                        <li><strong>Communication:</strong> Explaining complex concepts to non-technical stakeholders</li>
                    </ul>
                    
                    <h3 id="section4">Education and Training Pathways</h3>
                    <p>The educational landscape for AI careers has diversified significantly:</p>
                    <ul>
                        <li><strong>Traditional Degrees:</strong> Computer Science, Data Science, Cognitive Science</li>
                        <li><strong>Specialized AI Masters:</strong> Focused programs in Machine Learning, AI Ethics</li>
                        <li><strong>Industry Certifications:</strong> Cloud provider AI certifications (AWS, Google, Microsoft)</li>
                        <li><strong>Alternative Pathways:</strong> Bootcamps, self-directed learning, apprenticeships</li>
                    </ul>
                    <p>Interestingly, we're seeing more professionals transition to AI from adjacent fields like software engineering, data analytics, and even non-technical roles with strong domain expertise. Companies are increasingly valuing diverse backgrounds that bring new perspectives to AI development.</p>
                    
                    <h3 id="section5">Salary Expectations and Job Market</h3>
                    <p>AI roles continue to command premium compensation packages:</p>
                    <ul>
                        <li><strong>Entry-level AI Engineer:</strong> $90,000 - $120,000</li>
                        <li><strong>Mid-level AI Specialist:</strong> $130,000 - $180,000</li>
                        <li><strong>Senior AI Roles:</strong> $180,000 - $250,000+</li>
                    </ul>
                    <p>Beyond base salaries, AI professionals often receive substantial bonuses, equity packages, and benefits. The competition for talent remains intense, with companies offering remote work options, continuous learning stipends, and flexible arrangements to attract top candidates.</p>
                    
                    <h3 id="section6">How to Position Yourself for Success</h3>
                    <p>For those looking to enter or advance in AI careers, consider these strategies:</p>
                    <ol>
                        <li><strong>Build a Portfolio:</strong> Create projects that demonstrate your AI capabilities in real-world contexts</li>
                        <li><strong>Specialize Strategically:</strong> Develop expertise in emerging areas like reinforcement learning, multimodal AI, or AI ethics</li>
                        <li><strong>Contribute to Open Source:</strong> Participate in AI open source projects to build your network and reputation</li>
                        <li><strong>Follow Research:</strong> Stay updated on cutting-edge developments through papers, conferences, and research blogs</li>
                        <li><strong>Focus on Practical Implementation:</strong> Companies value candidates who can bridge the gap between research and production</li>
                    </ol>
                    <p>The AI field rewards continuous learning and adaptation. The most successful professionals view their career development as an ongoing process of skill acquisition and network building.</p>
                    
                    <div class="conclusion">
                        <p>The AI revolution is creating unprecedented opportunities for those with the right skills and mindset. By understanding these emerging career paths and strategically developing your capabilities, you can position yourself for a rewarding career at the forefront of technological innovation.</p>
                    </div>
                </div>
                
                <div class="social-sharing">
                    <button><i class="fab fa-twitter"></i> Share on Twitter</button>
                    <button><i class="fab fa-linkedin"></i> Share on LinkedIn</button>
                    <button><i class="fab fa-facebook"></i> Share on Facebook</button>
                </div>
            `
        },
        'personal-branding': {
            title: 'Building Your Tech Personal Brand',
            image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            summary: 'Learn how to strategically position yourself as an authority in your technical niche.',
            content: `
                <div class="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul class="toc-links">
                        <li><a href="#section1"><i class="fas fa-angle-right"></i> Why Personal Branding Matters in Tech</a></li>
                        <li><a href="#section2"><i class="fas fa-angle-right"></i> Defining Your Tech Brand Identity</a></li>
                        <li><a href="#section3"><i class="fas fa-angle-right"></i> Building Your Online Presence</a></li>
                        <li><a href="#section4"><i class="fas fa-angle-right"></i> Content Strategy for Tech Professionals</a></li>
                        <li><a href="#section5"><i class="fas fa-angle-right"></i> Measuring and Evolving Your Brand</a></li>
                        <li><a href="#section6"><i class="fas fa-angle-right"></i> Case Studies: Successful Tech Personal Brands</a></li>
                    </ul>
                </div>

                <div class="modal-blog-content-text">
                    <h3 id="section1">Why Personal Branding Matters in Tech</h3>
                    <p>In today's competitive tech landscape, technical skills alone are no longer enough to distinguish yourself. A strong personal brand serves as your professional reputation, creating opportunities that might otherwise remain closed:</p>
                    <ul>
                        <li><strong>Career Advancement:</strong> Professionals with recognized personal brands receive more interview requests, higher compensation offers, and faster promotions</li>
                        <li><strong>Inbound Opportunities:</strong> Speaking engagements, advisory roles, consulting projects come to you rather than requiring active pursuit</li>
                        <li><strong>Network Expansion:</strong> Connect with industry leaders and like-minded professionals who can accelerate your growth</li>
                        <li><strong>Career Insurance:</strong> A strong network and reputation provides resilience during economic downturns</li>
                    </ul>
                    <p>Research shows that 85% of tech hiring managers consider a candidate's online presence during the hiring process. Your personal brand isn't optional—it exists whether you actively manage it or not.</p>
                    
                    <h3 id="section2">Defining Your Tech Brand Identity</h3>
                    <p>Before building your brand presence, clarify these foundational elements:</p>
                    
                    <p><strong>1. Technical Expertise and Positioning</strong><br>
                    Identify your technical strengths and the intersection between what you're good at, what you enjoy, and what the market values. Rather than being a generalist, consider specializing in a specific area where you can become known (e.g., "React performance optimization expert" rather than "frontend developer").</p>
                    
                    <p><strong>2. Unique Value Proposition</strong><br>
                    What unique perspective or approach do you bring to your technical work? This might come from your background, industry experience, or particular methodology. For example: "I combine cybersecurity expertise with behavioral psychology to create human-centered security solutions."</p>
                    
                    <p><strong>3. Professional Narrative</strong><br>
                    Craft a compelling story about your technical journey—what drew you to your specialty, challenges you've overcome, and your vision for the field. A good narrative makes your expertise memorable and relatable.</p>
                    
                    <p><strong>4. Brand Voice and Personality</strong><br>
                    How will you communicate your expertise? Are you methodical and educational? Provocative and challenging of conventions? Empathetic and accessible? Your voice should feel authentic while remaining professionally appropriate.</p>
                    
                    <h3 id="section3">Building Your Online Presence</h3>
                    <p>With your brand foundation established, develop these key presence elements:</p>
                    
                    <p><strong>Professional Website/Portfolio</strong><br>
                    Your digital home base should showcase your work, expertise, and thought leadership. Include:</p>
                    <ul>
                        <li>Case studies of significant projects (with measurable results)</li>
                        <li>Technical blog with in-depth analysis</li>
                        <li>Professional bio highlighting your unique value</li>
                        <li>Testimonials from colleagues and clients</li>
                    </ul>
                    
                    <p><strong>LinkedIn Optimization</strong><br>
                    As the primary professional network, your LinkedIn profile deserves particular attention:</p>
                    <ul>
                        <li>Keyword-rich headline and About section</li>
                        <li>Detailed experience descriptions focusing on impact</li>
                        <li>Featured projects and publications section</li>
                        <li>Recommendations from colleagues at different levels</li>
                    </ul>
                    
                    <p><strong>GitHub and Technical Platforms</strong><br>
                    For developers, data scientists, and other technical roles:</p>
                    <ul>
                        <li>Well-documented repositories with clean code</li>
                        <li>Contributions to open-source projects</li>
                        <li>Technical discussions on Stack Overflow</li>
                        <li>Participation in relevant technical communities</li>
                    </ul>
                    
                    <p><strong>Social Media Strategy</strong><br>
                    Choose platforms strategically based on where your target audience engages:</p>
                    <ul>
                        <li>Twitter for tech discourse and networking</li>
                        <li>YouTube for technical tutorials and discussions</li>
                        <li>Medium for longer technical articles</li>
                    </ul>
                    
                    <h3 id="section4">Content Strategy for Tech Professionals</h3>
                    <p>Content creation is the most powerful way to demonstrate expertise and build your brand:</p>
                    
                    <p><strong>Content Pillars</strong><br>
                    Define 3-5 core topics aligned with your expertise where you'll create consistent content. For example, a data scientist might focus on:</p>
                    <ul>
                        <li>Practical applications of ML in business contexts</li>
                        <li>Data ethics and responsible AI</li>
                        <li>Python best practices for data science</li>
                        <li>Career transitions into data roles</li>
                    </ul>
                    
                    <p><strong>Content Types and Formats</strong><br>
                    Diversify your content approach based on your strengths:</p>
                    <ul>
                        <li><strong>Written:</strong> Technical blogs, case studies, documentation</li>
                        <li><strong>Visual:</strong> Infographics, architecture diagrams, code snippets</li>
                        <li><strong>Video:</strong> Tutorials, code reviews, technical discussions</li>
                        <li><strong>Interactive:</strong> GitHub repositories, demos, tools</li>
                    </ul>
                    
                    <p><strong>Publishing Cadence</strong><br>
                    Consistency matters more than frequency. Establish a sustainable rhythm, whether that's:</p>
                    <ul>
                        <li>Weekly: Short technical tips or observations</li>
                        <li>Monthly: In-depth technical articles or case studies</li>
                        <li>Quarterly: Comprehensive guides or original research</li>
                    </ul>
                    
                    <h3 id="section5">Measuring and Evolving Your Brand</h3>
                    <p>Track these metrics to gauge brand impact:</p>
                    
                    <p><strong>Quantitative Indicators</strong></p>
                    <ul>
                        <li>Audience growth across platforms</li>
                        <li>Engagement rates on technical content</li>
                        <li>Website traffic and resource downloads</li>
                        <li>Inbound opportunity frequency (speaking, jobs, etc.)</li>
                    </ul>
                    
                    <p><strong>Qualitative Feedback</strong></p>
                    <ul>
                        <li>Comments and discussions on your content</li>
                        <li>Direct feedback from respected peers</li>
                        <li>How you're introduced by others</li>
                        <li>Types of opportunities presented to you</li>
                    </ul>
                    
                    <p>Your brand should evolve as your expertise and career develop. Periodically reassess your positioning, update your narrative, and refine your content strategy to reflect your current goals.</p>
                    
                    <h3 id="section6">Case Studies: Successful Tech Personal Brands</h3>
                    <p>Let's examine three distinctive tech personal brands and key lessons from each:</p>
                    
                    <p><strong>Case Study 1: The Technical Teacher</strong><br>
                    This software architect became known for explaining complex distributed systems concepts through visual explanations. By creating a consistent series of architectural diagrams with accompanying explanations, they built a following of 50,000+ developers and eventually launched a successful training business.</p>
                    <p><em>Key Lesson:</em> Find a consistent format that showcases your unique way of explaining technical concepts.</p>
                    
                    <p><strong>Case Study 2: The Industry Analyst</strong><br>
                    This data scientist established themselves as an industry analyst by publishing quarterly deep-dives on AI trends with original research. Their thoughtful analysis earned them speaking slots at major conferences and eventually a leadership role at a prominent AI ethics organization.</p>
                    <p><em>Key Lesson:</em> Original research and thoughtful analysis can distinguish you from those who simply share opinions.</p>
                    
                    <p><strong>Case Study 3: The Technical Community Builder</strong><br>
                    This developer built their brand not through self-promotion but by creating valuable resources for their community. By maintaining open-source tools, organizing meetups, and mentoring newcomers, they became a respected figure whose reputation led to executive advisory roles.</p>
                    <p><em>Key Lesson:</em> Generous community contributions often build stronger brands than self-focused content.</p>
                    
                    <div class="conclusion">
                        <p>Building a tech personal brand is a long-term investment that compounds over time. Start small, remain consistent, and focus on providing genuine value to your technical community. The most effective brands emerge from authentic expertise and a genuine desire to contribute to your field.</p>
                    </div>
                </div>
                
                <div class="social-sharing">
                    <button><i class="fab fa-twitter"></i> Share on Twitter</button>
                    <button><i class="fab fa-linkedin"></i> Share on LinkedIn</button>
                    <button><i class="fab fa-facebook"></i> Share on Facebook</button>
                </div>
            `
        },
        'remote-work': {
            title: 'Maximizing Productivity in Remote Tech Teams',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            summary: 'Strategies for effective collaboration and communication in distributed engineering teams.',
            content: `
                <div class="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul class="toc-links">
                        <li><a href="#section1"><i class="fas fa-angle-right"></i> The Evolution of Remote Work in Tech</a></li>
                        <li><a href="#section2"><i class="fas fa-angle-right"></i> Communication Infrastructure for Distributed Teams</a></li>
                        <li><a href="#section3"><i class="fas fa-angle-right"></i> Collaboration Patterns for Remote Engineers</a></li>
                        <li><a href="#section4"><i class="fas fa-angle-right"></i> Building Culture and Connection Remotely</a></li>
                        <li><a href="#section5"><i class="fas fa-angle-right"></i> Productivity Systems for Remote Teams</a></li>
                        <li><a href="#section6"><i class="fas fa-angle-right"></i> Measuring Success in Distributed Teams</a></li>
                    </ul>
                </div>

                <div class="modal-blog-content-text">
                    <h3 id="section1">The Evolution of Remote Work in Tech</h3>
                    <p>Remote work in technology has undergone dramatic transformation since its early days. What began as an occasional perk has evolved into the default mode of operation for many tech organizations:</p>
                    
                    <p><strong>Pre-2020:</strong> Remote work was often limited to certain roles or offered as a periodic flexibility option. Companies maintained central offices where most collaboration happened.</p>
                    
                    <p><strong>2020-2022:</strong> The global shift to remote work forced rapid adaptation. Teams implemented emergency solutions for communication and collaboration, with mixed results for productivity and team cohesion.</p>
                    
                    <p><strong>2023-2025:</strong> We've entered the era of intentional remote work. Organizations have moved beyond emergency measures to design deliberate systems for distributed team success, incorporating lessons from the forced experiment.</p>
                    
                    <p>The most successful remote tech teams today recognize that distributed work isn't simply in-office work done at home. It requires reimagining communication patterns, collaboration approaches, and management philosophies to leverage the unique advantages of remote environments while mitigating their challenges.</p>
                    
                    <h3 id="section2">Communication Infrastructure for Distributed Teams</h3>
                    <p>Effective remote teams implement a thoughtful communication stack and clear protocols:</p>
                    
                    <p><strong>Synchronous vs. Asynchronous Communication</strong><br>
                    The most common pitfall for remote teams is defaulting to synchronous communication for everything. Instead, successful teams:</p>
                    <ul>
                        <li><strong>Reserve synchronous communication</strong> (video calls, real-time chat) for complex discussions, relationship building, and urgent issues</li>
                        <li><strong>Leverage asynchronous communication</strong> (documents, tickets, recorded videos) for status updates, detailed explanations, and most decision-making</li>
                        <li>Develop clear guidelines for when to use each modality</li>
                    </ul>
                    
                    <p><strong>Documentation Culture</strong><br>
                    In remote settings, documentation moves from nice-to-have to essential infrastructure:</p>
                    <ul>
                        <li>Maintain a single source of truth for technical decisions and architecture</li>
                        <li>Document meeting outcomes and action items automatically</li>
                        <li>Create searchable knowledge bases for recurring questions</li>
                        <li>Implement documentation review processes similar to code reviews</li>
                    </ul>
                    
                    <p><strong>Communication Tools Stack</strong><br>
                    The most effective remote engineering teams typically utilize:</p>
                    <ul>
                        <li><strong>Team chat</strong> (Slack, Discord) with clear channel structure and etiquette</li>
                        <li><strong>Video conferencing</strong> (Zoom, Google Meet) with recording capabilities</li>
                        <li><strong>Documentation platform</strong> (Notion, Confluence) for knowledge management</li>
                        <li><strong>Asynchronous video tools</strong> (Loom, Vidyard) for explanations and demos</li>
                        <li><strong>Digital whiteboarding</strong> (Miro, Figjam) for visual collaboration</li>
                    </ul>
                    
                    <h3 id="section3">Collaboration Patterns for Remote Engineers</h3>
                    <p>Remote engineering teams employ these specific collaboration techniques:</p>
                    
                    <p><strong>Asynchronous Code Reviews</strong></p>
                    <ul>
                        <li>Comprehensive PR descriptions with context and testing information</li>
                        <li>Screen recordings to walk through complex changes</li>
                        <li>Automated checks to reduce review burden</li>
                        <li>Clear expectations around review timing and thoroughness</li>
                    </ul>
                    
                    <p><strong>Distributed System Design</strong></p>
                    <ul>
                        <li>Multi-stage design processes with both asynchronous and synchronous components</li>
                        <li>Collaborative documents with commenting for initial proposals</li>
                        <li>Limited, focused synchronous sessions for key decisions</li>
                        <li>Visual documentation of architecture decisions</li>
                    </ul>
                    
                    <p><strong>Remote Pair Programming Approaches</strong></p>
                    <ul>
                        <li><strong>Driver/Navigator:</strong> Using screen sharing with clear role rotation</li>
                        <li><strong>Ping Pong Pairing:</strong> TDD approach where engineers alternate writing tests and implementation</li>
                        <li><strong>Distributed Mob Programming:</strong> Whole-team collaboration on difficult problems</li>
                        <li>Leveraging specialized tools like VS Code Live Share or Tuple</li>
                    </ul>
                    
                    <h3 id="section4">Building Culture and Connection Remotely</h3>
                    <p>Technical collaboration alone isn't enough; remote teams need deliberate approaches to build trust and connection:</p>
                    
                    <p><strong>Structured Team Building</strong></p>
                    <ul>
                        <li>Dedicated non-work interactions (virtual coffee chats, game sessions)</li>
                        <li>Periodic in-person retreats for intensive collaboration and relationship building</li>
                        <li>Interest-based channels and groups</li>
                        <li>Celebration of team and individual achievements</li>
                    </ul>
                    
                    <p><strong>Onboarding for Remote Success</strong><br>
                    New team members need extra support in remote settings:</p>
                    <ul>
                        <li>Structured, documented onboarding processes</li>
                        <li>Assigned onboarding buddies for daily questions</li>
                        <li>Regular 1:1s with team members beyond their manager</li>
                        <li>Early involvement in projects with multiple collaboration touchpoints</li>
                    </ul>
                    
                    <p><strong>Psychological Safety Practices</strong><br>
                    Remote teams must work harder to create environments where team members feel safe to take risks:</p>
                    <ul>
                        <li>Normalized public learning and mistake-sharing</li>
                        <li>Leaders modeling vulnerability and growth mindset</li>
                        <li>Recognition of different communication styles and preferences</li>
                        <li>Clear conflict resolution processes</li>
                    </ul>
                    
                    <h3 id="section5">Productivity Systems for Remote Teams</h3>
                    <p>High-performing remote teams implement these productivity practices:</p>
                    
                    <p><strong>Balanced Autonomy and Coordination</strong></p>
                    <ul>
                        <li>Clear definition of outcomes with flexibility on execution approaches</li>
                        <li>Team agreements on availability windows for synchronous work</li>
                        <li>Standardized status reporting to reduce check-in meetings</li>
                        <li>Focus blocks protected from interruptions</li>
                    </ul>
                    
                    <p><strong>Meeting Hygiene</strong><br>
                    Remote teams can't afford inefficient meetings:</p>
                    <ul>
                        <li>Agendas and pre-reads distributed well in advance</li>
                        <li>Asynchronous preparation and idea submission</li>
                        <li>Designated facilitators and timekeepers</li>
                        <li>Regular meeting audits to eliminate unnecessary sessions</li>
                    </ul>
                    
                    <p><strong>Work Management Systems</strong></p>
                    <ul>
                        <li>Visible work tracking with real-time status</li>
                        <li>Clear prioritization frameworks</li>
                        <li>Dependency mapping across teams</li>
                        <li>Alignment on definition of done</li>
                    </ul>
                    
                    <h3 id="section6">Measuring Success in Distributed Teams</h3>
                    <p>Effective remote teams implement these measurement approaches:</p>
                    
                    <p><strong>Output-Based Performance Metrics</strong><br>
                    Remote work requires shifting from activity to impact measurement:</p>
                    <ul>
                        <li>Focus on key delivery metrics rather than hours worked</li>
                        <li>Customer impact measurements</li>
                        <li>Quality indicators (bug rates, incident frequency)</li>
                        <li>Learning and growth objectives</li>
                    </ul>
                    
                    <p><strong>Team Health Monitoring</strong><br>
                    Regularly assess these dimensions of remote team health:</p>
                    <ul>
                        <li>Communication effectiveness and inclusivity</li>
                        <li>Knowledge sharing and documentation quality</li>
                        <li>Collaboration satisfaction</li>
                        <li>Individual wellbeing and work-life boundaries</li>
                    </ul>
                    
                    <p><strong>Continuous Improvement Process</strong></p>
                    <ul>
                        <li>Regular retrospectives specifically focused on remote work effectiveness</li>
                        <li>Experimentation with new tools and practices</li>
                        <li>Cross-team sharing of remote work best practices</li>
                        <li>Periodic reassessment of communication and collaboration patterns</li>
                    </ul>
                    
                    <div class="conclusion">
                        <p>Remote work in technical teams is no longer a temporary adaptation but a permanent shift in how engineering work happens. The most successful distributed teams don't just replicate in-office practices remotely—they redesign their collaboration models to leverage the unique advantages of distributed work while implementing deliberate practices to address its challenges.</p>
                        <p>By focusing on thoughtful communication infrastructure, structured collaboration patterns, intentional culture building, and appropriate measurement systems, remote tech teams can achieve productivity and satisfaction levels that match or exceed their co-located counterparts.</p>
                    </div>
                </div>
                
                <div class="social-sharing">
                    <button><i class="fab fa-twitter"></i> Share on Twitter</button>
                    <button><i class="fab fa-linkedin"></i> Share on LinkedIn</button>
                    <button><i class="fab fa-facebook"></i> Share on Facebook</button>
                </div>
            `
        }
    };

    // Service card click handlers
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const serviceId = this.closest('.service-card').dataset.service;
            const service = serviceContent[serviceId];
            
            if (service) {
                const modalContent = `
                    <div class="modal-service-content">
                        <div class="modal-service-header">
                            <h2>${service.title}</h2>
                        </div>
                        <div class="modal-featured-image">
                            <img src="${service.image}" alt="${service.title}">
                        </div>
                        <div class="modal-service-description">
                            ${service.description}
                        </div>
                    </div>
                `;
                
                openModal(modalContent);
            }
        });
    });

    // Blog card click handlers
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const blogId = this.closest('.blog-card').dataset.blog;
            const blog = blogContent[blogId];
            
            if (blog) {
                const modalContent = `
                    <div class="modal-blog-content">
                        <div class="modal-blog-header">
                            <h2>${blog.title}</h2>
                        </div>
                        <div class="modal-featured-image">
                            <img src="${blog.image}" alt="${blog.title}">
                        </div>
                        ${blog.content}
                    </div>
                `;
                
                openModal(modalContent);
            }
        });
    });

    // Referral button click handler
    if (referralBtn) {
        referralBtn.addEventListener('click', function() {
            document.getElementById('referral').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Submit referral code handler
    if (submitReferralBtn) {
        submitReferralBtn.addEventListener('click', function() {
            const code = referralCodeInput.value.trim();
            
            if (code === '1234') {
                // Valid code
                membershipSection.classList.remove('hidden');
                referralError.style.display = 'none';
                membershipSection.scrollIntoView({ behavior: 'smooth' });
                referralCodeInput.value = '';
            } else {
                // Invalid code
                referralError.textContent = 'Invalid referral code. Please try again.';
                referralError.style.display = 'block';
            }
        });
    }

    // Contact form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Newsletter form submission handler
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            
            if (emailInput.value.trim() !== '') {
                submitButton.textContent = 'Subscribing...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                    submitButton.textContent = 'Subscribe';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });

    // Animation on scroll (simple implementation)
    const animateElements = document.querySelectorAll('.service-card, .blog-card, .pricing-card');
    
    function checkElementsInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check and add scroll listener
    checkElementsInView();
    window.addEventListener('scroll', checkElementsInView);
    
    console.log('Mobile menu fix applied successfully!');
});