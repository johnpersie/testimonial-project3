import React from "react";
import picture from "../../sass/engineers.jpg";

const OurCompany = () => {
  return (
    <main>
      <div className="our-company">
        <h2 className="our-company__heading">
          <span>Welcome to</span>
        </h2>
        <h1>White Waters Engineering Limited</h1>

        <div className="our-company__content">
          <p>
            <img src={picture} alt="img" className=" content-imgbox img" />
            Whitewaters Engineering Limited is a Power and Energy solution
            company with the goal of partnering with Nigeria’s industrial sector
            players by providing and being a one stop shop offering topnotch
            services bordering on easy access to affordable, renewable, well
            managed and more durable power void of interruptions and epileptics.
            <br />
            <br />
            Whitewaters Engineering Limited is duly registered with the
            corporate affairs commission in accordance with the Governing
            Authority, laws and guidance of the federal republic of Nigeria
            while having valid field experience in energy and power solution
            engagements. Whitewaters Engineering Limited is also licensed by the
            Nigerian Electricity Management Services Agency (NEMSA).
            <br />
            <br />
            Whitewaters Engineering Limited is a fast-growing power and energy
            solutions company with a quick paced growing clientele base hinged
            on our excellent customer satisfaction. Whitewaters was birthed out
            of the quest to see a highly industrialized Nigeria where industry
            players are saved from insufficient power supply, over billing etc.
            <br />
            <br />
            The concept of Whitewaters Engineering Limited was born out of the
            research, exposure and understanding of the plights of Nigerian
            industrialists and the zeal to create and proffer a resolve to
            curtail, ameliorate and upturn at least 60 to 85% of the power and
            energy problems of these industrialists who suffer from poor
            turnover with relation to poor productivity as a result of various
            degrees of power and energy challenges they face on a daily basis.
            Caught up in a vicious cycle, these industrialists suffer as a
            result of poor/unmatched, epileptic power supply with mindless
            interruptions in their production line.
            <br />
            <br />
            Hence, Whitewaters Engineering was conceived to salvage these
            problems and emerging challenges by designing, offering and
            partnering with the power/electricity Authority as well as various
            power and energy sister industry players to deliver topnotch power
            services to needy industrialists across the nation’s industrial
            sectors.
            <br />
            <br />
            Ours is an eminent focused energy and power solution company
            building a large and well balanced portfolio in the power and energy
            industry space through strong synergism with Independent Power
            Providers(IPP),Power Generating Companies as well as Transmission
            Company of Nigeria(TCN) while also leveraging on the Nigeria
            Electricity Regulatory Commission(NERC) Eligibility Customers’
            Policy that allows power and energy firms with up to Two Mega
            Watts(2MW) power requirement to source power directly from the
            Independent Power Providers, Power Generating Companies and or
            Transmission Company of Nigeria.
            <br />
            <br />
            At Whitewaters Engineering Limited, we understand the value of easy
            access to affordable power as one of the main determinants of
            industrialization. Most industries in the country fail due to poor
            power application and management and or lack of alternatives while
            others are stock in the mirage of not knowing how to effectively
            distribute the available power evenly while maintaining high
            productivity without breakdown in their power/energy systems.
            <br />
            <br />
            These factors and more have continued to hamper the growth and
            development of the Nigerian industrial sector which is the economic
            heartbeat of the nation.
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurCompany;
