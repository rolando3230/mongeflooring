import 'package:flutter/material.dart';

class AboutUsView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF080494),
        title: Center(
          child: Text(
            'Expert Flooring Installation – The Perfect Step Toward Your Dream Space.',
            style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto'),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image on the left and text on the right
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Image on the left with floating effect
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    decoration: BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey.withOpacity(0.5),
                          spreadRadius: 5,
                          blurRadius: 10,
                          offset: Offset(0, 5), // changes position of shadow
                        ),
                      ],
                    ),
                    child: Image.asset(
                      'assets/images/7.jpg', // Replace with your asset path
                      width: 500, // Adjust the width as needed
                      height: 500, // Adjust the height as needed
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                SizedBox(width: 16.0), // Space between the image and text
                // Text on the right
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Monge Remodeling',
                        style: TextStyle(
                            fontFamily: 'Roboto',
                            fontSize: 24,
                            fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 16.0), // Space below the title
                      Text(
                        'At Monge Remodeling, we believe that great spaces start from the ground up. With years of experience in the remodeling industry, our expert flooring team is dedicated to delivering high-quality, stylish flooring solutions that perfectly match your vision. Whether you’re looking for timeless hardwood, durable tile, or modern luxury vinyl, we have the expertise to guide you through every step of the process.',
                        style: TextStyle(fontSize: 18, fontFamily: 'Roboto'),
                      ),
                      SizedBox(height: 16.0), // Space between sections
                      Text(
                        'Our Story',
                        style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            fontFamily: 'Roboto'),
                      ),
                      Text(
                        'Monge Remodeling was built on a passion for transforming homes and a commitment to superior craftsmanship. What started as a small family business has grown into a trusted name in remodeling, renowned for delivering high-quality services with a personal touch. Over the years, we’ve honed our skills and expanded our expertise, becoming flooring specialists who care about every detail. Our journey is rooted in trust, quality, and a love for creating spaces that people truly enjoy',
                        style: TextStyle(fontSize: 18, fontFamily: 'Roboto'),
                      ),
                      SizedBox(height: 16.0), // Space between sections
                      Text(
                        'Our Mission',
                        style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            fontFamily: 'Roboto'),
                      ),
                      Text(
                        'To transform your home with precision, craftsmanship, and attention to detail. We understand that your floors are more than just a surface to walk on – they set the foundation for your entire space. That’s why we take the time to understand your needs, recommend the best materials, and ensure seamless installation for results that last a lifetime.',
                        style: TextStyle(fontSize: 18, fontFamily: 'Roboto'),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: 32.0), // Space between sections
            // Text on the left and image on the right, with white background
            Container(
              color: Colors.white, // Set the background to white
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Text on the left
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text(
                            'Our Values',
                            style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.bold,
                                fontFamily: 'Roboto'),
                          ),
                        ),
                        SizedBox(height: 16.0),
                        Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text(
                            'At Monge Remodeling, we are committed to quality, integrity, craftsmanship, customer satisfaction, and innovation, ensuring that every project is completed with the utmost care and attention to detail',
                            style:
                                TextStyle(fontSize: 18, fontFamily: 'Roboto'),
                          ),
                        ),
                        SizedBox(height: 16.0),
                        Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text(
                            'Why Choose Us?',
                            style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.bold,
                                fontFamily: 'Roboto'),
                          ),
                        ),
                        Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text(
                            'Choose Monge Remodeling for personalized service, expert installation, a wide selection of flooring options, end-to-end support, and a trusted team dedicated to transforming your space with beautiful, lasting results.',
                            style:
                                TextStyle(fontSize: 18, fontFamily: 'Roboto'),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: 16.0), // Space between the text and image
                  // Image on the right with floating effect
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Container(
                      decoration: BoxDecoration(
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 10,
                            offset: Offset(0, 5), // changes position of shadow
                          ),
                        ],
                      ),
                      child: Image.asset(
                        'assets/images/22.jpg', // Replace with your asset path
                        width: 500, // Adjust the width as needed
                        height: 500, // Adjust the height as needed
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Footer(),
          ],
        ),
      ),
    );
  }
}

class Footer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color.fromARGB(255, 0, 36, 107), // Set background color
      padding: EdgeInsets.all(16.0), // Add padding around the footer
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            'Connect With Us',
            style: TextStyle(
              fontSize: 16,
              fontFamily: 'Roboto',
              fontWeight: FontWeight.bold,
              color: Colors.white, // Text color
            ),
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildSocialIcon('assets/images/fb.png', () {
                // Add Facebook link here
              }),
              SizedBox(width: 16), // Add spacing between icons
              _buildSocialIcon('assets/images/instagram.png', () {
                // Add Instagram link here
              }),
              SizedBox(width: 16), // Add spacing between icons
              _buildSocialIcon('assets/images/linked.jpg', () {
                // Add LinkedIn link here
              }),
              SizedBox(width: 16), // Add spacing between icons
              _buildSocialIcon('assets/images/youtube.png', () {
                // Add YouTube link here
              }),
              SizedBox(width: 16), // Add spacing between icons
              _buildSocialIcon('assets/images/twitter.png', () {
                // Add Twitter link here
              }),
            ],
          ),
          SizedBox(height: 20),
          Text(
            'Copyright © 2024 Monge Remodeling. All rights reserved.',
            style: TextStyle(
                fontSize: 14,
                color: Colors.white, // Text color
                fontFamily: 'Roboto'),
          ),
        ],
      ),
    );
  }

  Widget _buildSocialIcon(String assetPath, VoidCallback onPressed) {
    return Container(
      width: 40,
      height: 40,
      decoration: BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
      ),
      child: IconButton(
        icon: Image.asset(assetPath), // Replace with your asset path
        onPressed: onPressed,
      ),
    );
  }
}
