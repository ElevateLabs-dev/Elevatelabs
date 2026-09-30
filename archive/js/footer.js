class myFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="footer-wrapper">
      <div data-w-id="f1ff1ac2-5ccd-56f8-612a-0570791caa19" class="footer-main-section">
        <div class="corner-gradient-container">
          <div class="footer-top">
            <div class="footer-logo-wrapper">
              
              <a data-wf--logo-icon-link--variant="large"
                data-w-id="87dfc950-060b-8c99-0112-a1812f935a28" href="index.html" aria-current="page"
                class="logo-link w-inline-block w--current">
                <img
                  src="img/elevatelabs-logo.png"
                  loading="lazy" width="54" height="54" alt="elevatelabs logo"
                  class="logo-icon w-variant-7662d6cb-8aa5-f783-c60a-07a613bd9733" />
                </a>
              </div>
              
              <a data-w-id="f5edb239-6f3b-4fa3-4e45-ec1c35b87dcb"
              href="careers.html" class="footer-button w-inline-block">
              <div class="button-content footer">
                <div>Join our team</div>
              </div>
              <div class="button-icon-wrapper footer primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                  viewBox="0 0 17 17" fill="none" class="squared-icon">
                  <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="square">
                  </path>
                </svg>
                <div class="button-icon-bg"></div>
                <div class="button-icon-bg-inside"></div>
              </div>
            </a>
          </div>

          <div class="corner-gradient-wrapper">
            <div class="corner-gradient-horizontal bottom-left dark-mode"></div>
            <div class="corner-gradient-horizontal bottom-right dark-mode"></div>
          </div>
        </div>
        <div class="footer-middle">
          <div class="w-layout-blockcontainer container-default w-container">
            <div class="w-layout-grid footer-middle-content">
              <div class="inner-container _355px _100-tablet">
                <div class="display-6 medium text-titles-dm">
                  Stay informed on our latest builds.
                </div>
                <div class="mg-top-8-px">
                  <p class="text-color-neutral-400 mg-bottom-20px">
                    Receive quarterly technical briefings on our internal ventures 
                    and be the first to know about our R&D breakthroughs.
                  </p>
                </div>
                <div data-w-id="db486e02-a33e-9172-e76a-16a224c3f369" class="form-block _465px w-form">
                  <form id="wf-form-Footer-Form" name="wf-form-Footer-Form" data-name="Footer Form" method="get"
                    data-wf-page-id="68a342b7066c56fa60eb3ba0"
                    data-wf-element-id="db486e02-a33e-9172-e76a-16a224c3f36a">
                    <div class="position-relative">
                      <input class="input dark-mode w-input" maxlength="256" name="Email"
                        data-name="Email" placeholder="Enter your email" type="email" id="Footer-Email" required="" />
                      <div class="button-inside-input-wrapper dark-mode left-mbp"><input type="submit"
                          data-wait="Please wait..." class="form-button inside-input dark-mode w-button"
                          value="Subscribe" /></div>
                    </div>
                  </form>

                  <div class="success-message-wrapper w-form-done">
                    <div class="success-message-inside-input dark-mode">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        width="100%" viewBox="0 0 20 20" fill="none" class="squared-icon _14px">
                        <path
                          d="M7.20658 10.9311L9.24116 12.1209L12.7928 7.20696M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
                        </path>
                      </svg>
                      <div>Thanks for subscribing to our newsletter!</div>
                    </div>
                  </div>
                  <div class="error-message w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div class="w-layout-grid footer-pages-grid">
                <div class="footer-pages-column">
                  <a data-w-id="eb04a999-cb68-7556-6f97-7c9e7021aeb2" href="index.html"
                    aria-current="page" class="footer-link w-inline-block w--current">
                    <div class="footer-link-text">Home</div>
                    <div class="footer-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                        viewBox="0 0 17 17" fill="none" class="squared-icon">
                        <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="square"></path>
                      </svg>
                    </div>
                    <div class="footer-link-bg"></div>
                  </a>
                  
                  <a data-w-id="c3fc597d-2bab-7e7f-6ad2-caefca4bb44c"
                    href="about.html" class="footer-link w-inline-block">
                    <div class="footer-link-text">About</div>
                    <div class="footer-link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                        viewBox="0 0 17 17" fill="none" class="squared-icon">
                        <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="square">
                        </path>
                      </svg>
                    </div>
                    <div class="footer-link-bg"></div>
                  </a>
                  
                  <a data-w-id="75e75c7f-37b8-f6f8-2604-26950e94846f"
                    href="contact.html"
                    class="footer-link w-inline-block">
                    <div class="footer-link-text">Contact</div>
                    <div class="footer-link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                        viewBox="0 0 17 17" fill="none" class="squared-icon">
                        <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="square"></path>
                      </svg>
                    </div>
                    <div class="footer-link-bg"></div>
                  </a>
                  
                </div>

                <div class="footer-pages-column">

                  <a data-w-id="5ee8a266-93fc-e564-45e6-87434fded9dd"
                    href="careers.html"
                    class="footer-link last---left-column w-inline-block">
                    <div class="footer-link-text">Careers</div>
                    <div class="footer-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                        viewBox="0 0 17 17" fill="none" class="squared-icon">
                        <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="square"></path>
                      </svg></div>
                    <div class="footer-link-bg"></div>
                  </a>
                  
                  <a data-w-id="0bf4dd62-f7b3-f655-3b63-d1a68d507b57"
                    href="resources.html" class="footer-link w-inline-block">
                    <div class="footer-link-text">Resources</div>
                    <div class="footer-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                        viewBox="0 0 17 17" fill="none" class="squared-icon">
                        <path d="M6.25391 3.45312L10.7458 8.01563L6.25391 12.5781" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="square"></path>
                      </svg></div>
                    <div class="footer-link-bg"></div>
                  </a>                               
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="corner-gradient-container">
          <div class="w-layout-grid footer-links-wrapper">
            <a data-w-id="08100fe2-7e2d-6e6c-ca53-e21c22c274f5"
              href="mailto:hello@elevatelabs.dev" class="footer-contact-link w-inline-block">
              <div class="footer-contact-link-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                  viewBox="0 0 24 24" fill="none" class="footer-contact-link-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 2H24V4.31556L12.0001 10.861L0 4.31546V2ZM0 6.59364V22H24V6.59373L12.0001 13.1391L0 6.59364Z"
                    fill="currentColor"></path>
                </svg>
                <div class="footer-contact-link-bg"></div>
              </div>
              <div>
                <div class="text-color-neutral-500">Email address</div>
                <div class="mg-top-5x-extra-small">
                  <div class="medium text-titles-dm">hello@elevatelabs.dev</div>
                </div>
              </div>
            </a>
            
            <a data-w-id="12a5a5ea-5225-5ae1-f20a-da153470d97b" 
            href="contact.html" target="_blank"
              class="footer-contact-link w-inline-block">
              <div class="footer-contact-link-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                  viewBox="0 0 24 24" fill="none" class="footer-contact-link-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2 1H1V20H5.25V23.7944L6.77605 22.8505L11.3843 20H23V1H2ZM16 9.5H7V6.5H16V9.5ZM7 14.5H14V11.5H7V14.5Z"
                    fill="currentColor"></path>
                </svg>
                <div class="footer-contact-link-bg"></div>
              </div>
              <div>
                <div class="mg-top-5x-extra-small">
                  <div class="medium text-titles-dm">Chat with us</div>
                </div>
              </div>
            </a>
            
            <a data-w-id="7fe5019c-0d48-0b18-79a9-ab7251d22b0b" href="mailto:support@elevatelabs.dev"
              class="footer-contact-link w-inline-block">
              <div class="footer-contact-link-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                  viewBox="0 0 24 24" fill="none" class="footer-contact-link-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.375 12C1.375 6.13197 6.13197 1.375 12 1.375C17.868 1.375 22.625 6.13197 22.625 12C22.625 17.868 17.868 22.625 12 22.625C6.13197 22.625 1.375 17.868 1.375 12ZM12.8543 7.60707H11.0834V5.83623H12.8543V7.60707ZM11.1146 11.1146H9.34375V9.34375H12.8854V15.5417H14.6563V17.3125H9.34375V15.5417H11.1146V11.1146Z"
                    fill="currentColor"></path>
                </svg>
                <div class="footer-contact-link-bg"></div>
              </div>
              <div>
                <div class="text-color-neutral-500">Support</div>
                <div class="mg-top-5x-extra-small">
                  <div class="medium text-titles-dm">support@elevatelabs.dev</div>
                </div>
              </div>
            </a>
          </div>

          <div class="corner-gradient-wrapper">
            <div class="corner-gradient-horizontal bottom-left dark-mode"></div>
            <div class="corner-gradient-horizontal bottom-right dark-mode"></div>
            <div class="corner-gradient-horizontal top-left dark-mode"></div>
            <div class="corner-gradient-horizontal top-right dark-mode"></div>
          </div>
        </div>

        <div class="footer-bottom">
          <a href="contact.html" target="_blank"
            class="link-square-icon-left---dark-mode w-inline-block">
            <div>Do more with Elevatelabs.</div>
          </a>
          <p class="text-color-neutral-500">
            ${year} &copy; Elevatelabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
        `;
    }
}
customElements.define('my-footer', myFooter);