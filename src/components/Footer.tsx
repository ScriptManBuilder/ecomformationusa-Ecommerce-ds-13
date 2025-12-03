import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  CompanyInfo,
  FooterSectionTitle,
  LinkList,
  LinkItem,
  FooterLink,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Voxerra';
  const companyName = process.env.REACT_APP_COMPANY_NAME || 'Ecomformationusa Inc';
  const companyAddress = process.env.REACT_APP_COMPANY_ADDRESS || '126 Lake Mariam Way, Winter Haven, FL 33884';
  const companyPhone = process.env.REACT_APP_PHONE_DISPLAY || '+12094411840';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@eformcallcenter.com';

  const handleScrollTo = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#10b981" opacity="0.1"/>
                <path d="M12 10C11.45 10 11 10.45 11 11V12C11 12.55 11.45 13 12 13H13.5L16 20L17.5 24H25.5L28 18L29 15H15L14 12H12Z" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="27" r="1.5" fill="#10b981"/>
                <circle cx="24" cy="27" r="1.5" fill="#10b981"/>
                <path d="M16 20H26M17.5 24H25.5" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="20" cy="20" r="12" stroke="#10b981" strokeWidth="1.5" opacity="0.3"/>
                <path d="M22 9L24 11L28 7" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {brandName}
            </FooterLogo>
            <CompanyInfo>
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Established {process.env.REACT_APP_COMPANY_BIRTH}</p>
            </CompanyInfo>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Platform</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#features')}>What We Do</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#stats')}>How It Works</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#how-it-works')}>Results & Proof Points</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#faq')}>Who We Serve</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Legal</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/digital-products">Digital Products Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/company-info">Company Information</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/support">Merchant Support</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/ccpa-notice">CCPA Notice</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-processing">Data Processing Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-subject-request">Data Subject Request Form</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/e-signature">E-Signature Disclosure Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/end-user-terms">End-User Terms of Service</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/merchant-disclosure">Payment Disclosure</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact Sales</FooterSectionTitle>
            <ContactCard>
              <ContactItem>
                <ContactLabel>Sales Email</ContactLabel>
                <ContactValue as="div" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {supportEmail}
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Sales Phone</ContactLabel>
                <ContactValue href={`tel:${companyPhone.replace(/\s+/g, '')}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {companyPhone}
                </ContactValue>
              </ContactItem>
            </ContactCard>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p>Enterprise decline-salvage platform for merchants. PCI-DSS compliant. GDPR & CCPA ready.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
