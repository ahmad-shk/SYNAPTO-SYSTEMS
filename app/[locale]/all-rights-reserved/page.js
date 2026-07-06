import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageTitle="All Rights Reserved" pageName="All Rights Reserved" />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <h2 className="mb-4">All Rights Reserved</h2>
                <p>
                  All content, designs, graphics, code, and software used on or incorporated into this website are the intellectual property of Ernova. You may not reproduce, distribute, or otherwise use any intellectual property from this website without explicit written consent from Ernova.
                </p>
                <h4 className="mt-5 mb-3">Copyright Information</h4>
                <p>
                  Copyright © Ernova. All rights reserved. The reproduction, modification, distribution, transmission, republication, or display of the content on this website is strictly prohibited.
                </p>
                <h4 className="mt-5 mb-3">Trademarks</h4>
                <p>
                  All trademarks, service marks, and trade names of Ernova used in the site are trademarks or registered trademarks of Ernova.
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
