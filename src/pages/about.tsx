import React from 'react';

import { Layout, Seo } from '@app/components';

const About: React.FC = () => {
  return (
    <Layout>
      <Seo title="About" />

      <section className="container pt-4 pb-10 md:pb-20 px-5 mx-auto">
        <h3 className="text-h3 font-bold text-center">About</h3>
        <div className="w-full md:w-3/5 mt-10 md:mt-24">
          <p className="text-h3 md:text-h1 font-medium">
            Orci, nunc in feugiat volutpat, sed leo. Ultrices cum varius eget mollis cursus massa
            integer metus, amet. Tempor, ornare mattis aenean nullam sit ac. Eu placerat lectus et
            pellentesque pretium, quisque risus nisi.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-10 md:mt-24">
          <p className="w-full md:w-1/2">
            Quam tristique scelerisque vehicula bibendum etiam amet, id aenean. Mollis potenti purus
            ante egestas elit nulla. Iaculis egestas tincidunt nunc, sed risus, elementum ipsum
            fermentum. Id semper turpis proin vitae eu egestas. Habitant nullam varius iaculis elit,
            suspendisse elementum, sit porta. Amet ac diam at vitae, et donec. Volutpat phasellus
            est vel placerat eu. Purus sed neque blandit in ac. Sollicitudin sed urna quis fringilla
            ut viverra. Lectus ornare id hac pellentesque euismod pellentesque at tortor. Magna
            vulputate nisl magna.
          </p>
          <p className="w-full md:w-1/2 md:ml-6 mt-10 md:mt-0">
            Eleifend tortor, consequat in pharetra sit at. Dolor vitae tellus ac laoreet molestie
            quis. Lacus, at ut at facilisi. At eget lacus, blandit sed mauris, arcu suspendisse.
            Aliquam quis parturient mauris nisl. Nibh eget id mi sed ultricies lectus orci.
            Tincidunt neque commodo lectus pretium, ut quam nulla odio adipiscing. Magna mollis
            pellentesque malesuada nullam quisque. Et tincidunt viverra.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
