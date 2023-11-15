import React, { useEffect, useState } from 'react';
import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import { useRecoilState } from 'recoil';
import { utilsAtom } from '../../atoms/utilityAtom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Iconly } from 'react-iconly'





const Education: React.FC = () => {
  const [showTabs, setTab] = useRecoilState(utilsAtom);

  useEffect(() => {
    setTab({
      ...showTabs,
      showTabs: true
    });
  }, []);

  const blogPosts = [
	{ id: 1, image: 'assets/images/blog-1.jpg', title: 'How does 876', content: 'This is a little content of blog post 1...', rating: 5 },
	{ id: 2, image: 'assets/images/blog-2.jpg', title: 'Blog Post 2', content: 'This is a little content of blog post 2...', rating:3 },
	{ id: 3, image: 'assets/images/blog-2.jpg', title: 'Blog Post 2', content: 'This is a little content of blog post 2...', rating: 3 },
	{ id: 4, image: 'assets/images/blog-2.jpg', title: 'Blog Post 2', content: 'This is a little content of blog post 2...', rating: 5 },
	// ... add more blog posts here
   ];


   

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start" class="ion-margin-start">
            <h3>Education</h3>
          </IonButtons>

          <IonButtons slot="end" className='ion-margin-end'>
            <IonIcon size='large' color='primary' icon={informationCircleOutline}/>
          </IonButtons>
        </IonToolbar>
       
      </IonHeader>

     


      <IonContent>
		
				<IonGrid>
					<IonRow className="ion-padding-start">
						<IonCol size="12"> 
							<IonCardTitle color="dark"> <span className="small ">Our Daily</span>   Recommendation  !</IonCardTitle>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="12">
							<IonSearchbar className="search" animated={ true } placeholder="Try 'How to Trade'" />
						</IonCol>
					</IonRow>

					<IonRow className="ion-padding-start ion-padding-end ion-justify-content-between ion-align-items-center">
						<h2 className="bold">Popular Content</h2>
						<IonRouterLink routerLink="#">
							<IonBadge color="primary" style={{ marginTop: "0.4rem", padding: "0.5rem" }}>View all &rarr;</IonBadge>
						</IonRouterLink>
					</IonRow>
				</IonGrid>

				<div className='slidesContainer'>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={0.1}
        pagination={{ clickable: true }}
        navigation={true}
        scrollbar={{ draggable: true }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>



<IonCard className="slide  animate__animated animate__fadeIn animate__faster" routerLink={ `/view-place/${ post.id }` }>
			<div className="imageHeader">
				<img src={post.image} style={{ borderRadius:"10%" }}/> 
			</div> 
				<h3 style={{ color:"white"}}> { post ? post.title : "Sorry" } </h3>
 			 
		</IonCard>
          </SwiperSlide>
		))}
		</Swiper>
		</div>


			
				
				
				<IonGrid>
					<IonRow className="ion-padding-start ion-padding-end ion-justify-content-between ion-align-items-center">
						<h2 className="bold">Tutorials</h2>
						
						<IonRouterLink routerLink="#">
							<IonBadge color="primary" style={{ marginTop: "0.4rem", padding: "0.5rem" }}>View all &rarr;</IonBadge>
						</IonRouterLink>
					</IonRow>
				</IonGrid>
			


				<IonList className="ion-padding-bottom ion-margin-bottom animate__animated animate__fadeIn animate__faster">
					{ blogPosts.map((post, index) => {

						//	We could do some cool things with this
						const animateDirection = index % 2 == 0 ? "animate__slideInLeft" : "animate__slideInRight";

						return (
							<div className="placeItem">

							
							<IonItem  key={ index } lines="full" className="placeItem" detail={ true } routerLink={ `/view-place/${ post.id }` }>
								<img src={ post.image } alt="place" />

								<IonLabel>
									<h1>{ post.title }</h1>
									<p>{ post.title }</p>
								</IonLabel>
								
								<span className="placeItemRating">
									<Iconly set="bold" name="Star" />
									<IonNote>
										{ (Math.trunc(post.rating*100)/100).toFixed(1) }
									</IonNote>
								</span>
							</IonItem>

							</div>
						);
					})}
				</IonList>

			 
				 

			</IonContent> 
    </IonPage>
  );
};

export default Education;
