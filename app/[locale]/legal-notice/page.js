import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageTitle="Legal Notice" pageName="Legal Notice" />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <h2 className="mb-4">Legal Notice</h2>
                <p>
                  Please read this Legal Notice carefully before accessing or using the Ernova website. By accessing or using any part of the site, you agree to be bound by the terms detailed below.
                </p>
                <h4 className="mt-5 mb-3">Company Information</h4>
                <p>
                  Ernova provides complete ordering and delivery systems, custom mobile applications, and digital marketing optimizations.
                </p>
                <h4 className="mt-5 mb-3">Disclaimer of Warranties</h4>
                <p>
                  Our website and its services are provided on an "as is" and "as available" basis. Ernova makes no representations or warranties of any kind, express or implied, as to the operation of the website, the information, content, or materials included on the site.
                </p>
                <h4 className="mt-5 mb-3">Limitation of Liability</h4>
                <p>
                  In no event will Ernova be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ernova's website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;
