import React, { Fragment, useEffect } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import TabProductFive from "../../wrappers/product/TabProductFive";
import axios from "axios";

const HomeCosmetics = () => {


  const sessionCapture = () => {
        axios.get('https://thehworld-v1.onrender.com', {withCredentials: true}).then((res) => {
            console.log('res - ', res);
        }).catch((err) => {
            console.log('Error - ', err);
        });
  }

  useEffect(() => {
  }, [])

  const clickSessionKey = (e) => {
    e.preventDefault();
    sessionCapture();

  }
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Cosmetics Home"
        description="Cosmetics home of flone react minimalist eCommerce template."
      />
      <button onClick={clickSessionKey}>
        KEy
      </button>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderEight />
        <TabProductFive
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
          category="cosmetics"
        />
        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass="pb-95" />
        {/* banner */}
        <BannerNine spaceBottomClass="pb-70" />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
    
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCosmetics;
