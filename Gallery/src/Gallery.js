import React from 'react'
import { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const images = [
    'https://img.freepik.com/free-photo/stylish-young-girl-wearing-hoodie-coat-sunglasses-standing-stairs-underground-nightclub-with-industrial-interior_613910-21752.jpg?w=1060&t=st=1685026122~exp=1685026722~hmac=e6b6a6386ec43314792b0449df7e1af2da8b16a5e3b22c93cd0c64817ea6b1f3',
    'https://img.freepik.com/free-photo/caucasian-young-woman-s-portrait-gradient_155003-19086.jpg?w=1060&t=st=1685027124~exp=1685027724~hmac=0e4804167108603ebb5a928bf0f668d624ab82bcf2088b2e60d14446bd5d3d6e',
    'https://img.freepik.com/free-photo/framing-selfie_155003-21289.jpg?w=1060&t=st=1685027148~exp=1685027748~hmac=f232ed25b1f864d60931a64ce509896e63681b4a13166fa72df099ab8b7efc24',
    'https://img.freepik.com/free-photo/beautiful-woman-s-portrait-with-blowing-hair-colorful-neon-light_155003-3394.jpg?w=1060&t=st=1685027161~exp=1685027761~hmac=265c2fcc2ab252aaa684dc16850cc13cbde9a4e07345b1a6a9d3291d4069d1cc',
    'https://img.freepik.com/free-photo/high-fashion-model-colorful-bright-neon-lights-posing-studio-portrait-beautiful-girl-with-trendy-glowing-make-up-art-design-vivid-style_155003-34523.jpg?w=1060&t=st=1685027194~exp=1685027794~hmac=8ac539d3a02cd2a5e2bd9a6fa2522206b93aa464ff8a7ac976b282a9fb965e5e',
    'https://img.freepik.com/free-photo/beautiful-woman-s-portrait-colorful-neon-light_155003-3392.jpg?w=1060&t=st=1685027651~exp=1685028251~hmac=b1f2d283dfe0973a3cc66a0f7112820dd6418c512d9e547c1d57c1696eab3894',
  'https://img.freepik.com/free-photo/portrait-young-woman-pink-wall-with-headphones_155003-11757.jpg?w=1060&t=st=1685027677~exp=1685028277~hmac=1ea92f82251c64f27371a6f6aa45c8915dbd5021a2dea1a119a03ada7d3f8e84',
  'https://img.freepik.com/free-photo/portrait-female-fashion-model-neon-light-dark-studio-background_155003-42539.jpg?w=1060&t=st=1685027692~exp=1685028292~hmac=5c7a9b55db7f23c6fab0a6656ae64108a60566a8f626f1de886bbdc0bdb357ed',
  'https://img.freepik.com/free-photo/tender-portrait-female-fashion-model-neon-light-dark-beautiful-caucasian-woman-with-trendy-make-up-well-kept-skin_155003-20625.jpg?w=1060&t=st=1685027709~exp=1685028309~hmac=c7fa24b1b795c8df022ee6a20187077401fa618e986d8204c03bfc5d4957455f',
  'https://img.freepik.com/free-photo/framing-selfie-caucasian-man-s-portrait-gradient-studio-background-neon-light-beautiful-male-model-with-hipster-style-concept-human-emotions-facial-expression-sales-ad_155003-25723.jpg?w=1060&t=st=1685027734~exp=1685028334~hmac=3f7615d463c919ba2559c939d0fc63e3340b6e849db4c901554751bd03ea5c7e',
  'https://img.freepik.com/free-photo/caucasian-woman-s-portrait-gradient-studio-background-neon-light-beautiful-male-model-with-hipster-style-glasses-concept-human-emotions-facial-expression-sales-ad-showing-nice_155003-30705.jpg?w=1060&t=st=1685027788~exp=1685028388~hmac=addadde7cfaf225a215042fad1dfc28b24331cacd15705fb2ff9e45241525821',
  'https://img.freepik.com/free-photo/high-fashion-model-colorful-bright-neon-lights-posing-studio-portrait-beautiful-girl-with-trendy-glowing-make-up-art-design-vivid-style_155003-34524.jpg?w=1060&t=st=1685027872~exp=1685028472~hmac=d442cb4a29e32287d566da30728f76f7ff8a26727b60d601cfc18a36f8ee65a6',
  'https://img.freepik.com/free-photo/tender-portrait-female-fashion-model-neon-light-dark-beautiful-caucasian-woman-with-trendy-make-up-well-kept-skin_155003-20627.jpg?w=1060&t=st=1685027886~exp=1685028486~hmac=9ee85febb7e4ae3ca2917648e6f56935381a721f993acd96817fad1a125c60dd',
  'https://img.freepik.com/free-photo/portrait-teenager-with-light_52683-87387.jpg?w=1380&t=st=1685027912~exp=1685028512~hmac=0068eab22e10a3a5dd1886539b9fd709dceb81e5543e9af9b0a71c8b9acb3d70',
  'https://img.freepik.com/free-photo/beautiful-portrait-teenager-woman_23-2149453430.jpg?w=1060&t=st=1685027930~exp=1685028530~hmac=1f26cfa4b7554a6f1096bbffb1c835cc69af850464653ae795eac64c41acfa82',
  'https://img.freepik.com/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419483.jpg?w=1060&t=st=1685027948~exp=1685028548~hmac=b5b6ca715a03699070e1596b0ce021be7580adb56d77f8cf4cc9dc96d590a067',
  'https://img.freepik.com/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419462.jpg?w=1060&t=st=1685027967~exp=1685028567~hmac=980c363918a8847af9834655b96a9d6e6ef2f5a228e24e170cb8ab642f198e95',
  'https://img.freepik.com/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419473.jpg?w=1060&t=st=1685027993~exp=1685028593~hmac=ab4d76dc4756c1fc153046daf1a6d27331010d6187aeb707b8f0e0bfa06e015b',
  'https://img.freepik.com/free-photo/beautiful-portrait-teenager-woman_23-2149453395.jpg?w=1060&t=st=1685028006~exp=1685028606~hmac=da0f94de1aeb01cec0197d056fad1639520e3ab7e2b964a2b3aec143e1ff87ea',
  'https://img.freepik.com/free-photo/close-up-smiley-woman-with-neon-light_23-2149005463.jpg?w=1060&t=st=1685028023~exp=1685028623~hmac=07817d8a1820e4ba15c7a0b8e605d077b2efb4593a8286a56a69cd80c7405c2f',
  'https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-gradient-studio_155003-6503.jpg?w=1060&t=st=1685028035~exp=1685028635~hmac=0e60713d92be5864623471ac1dfb17c9a36d1f829a8f5a5aa978a7a2c9fafe78',
  'https://img.freepik.com/free-photo/asian-young-womans-portrait-dark-wall-neon-concept-human-emotions-facial-expression-youth-sales-ad_155003-33583.jpg?w=1060&t=st=1685028054~exp=1685028654~hmac=502ff0ab72d58fbe5b92c446e73f9ce12277193e2d45c50ed1213a9389c33821',
  'https://img.freepik.com/free-photo/neon-light-reflected-girl-s-glasses_181624-37796.jpg?w=996&t=st=1685028066~exp=1685028666~hmac=6744fba6623a3e2464dfc64fd83f90f5f16354029df43a9c7ef47920f249f212',
  'https://img.freepik.com/free-photo/tender-portrait-female-fashion-model-neon-light-dark-beautiful-caucasian-woman-with-trendy-make-up-well-kept-skin_155003-20626.jpg?w=1060&t=st=1685028086~exp=1685028686~hmac=59f8681fb86836d3194e5216a97015faf0dd42ea6f560e1e389d466d9a000e2a'
  ];

  const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleThumbnailClick = (image) => {
      setSelectedImage(image);
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sliding Gallery
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {images.map((image, index) => (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                  <Paper
                    elevation={selectedImage === image ? 3 : 1}
                    onClick={() => handleThumbnailClick(image)}
                    style={{
                      cursor: 'pointer',
                      padding: '10px',
                      backgroundColor: selectedImage === image ? '#f0f0f0' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100px',
                      borderRadius: '8px'
                    }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {selectedImage && (
              <Paper
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  height: '500px',
                  borderRadius: '8px'
                }}
              >
                <Typography variant="h5"></Typography>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Gallery;
