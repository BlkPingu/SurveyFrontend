import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Privacy from '@/components/Privacy'
import Question from '@/components/Question'
import Thanks from '@/components/Thanks'
import Imprint from '@/components/Imprint'
import PrivacyNotice from '@/components/PrivacyNotice'
import Cookie from '@/components/Cookie'
import Hint from '@/components/MicrophoneHint'
import Metadata from '@/components/Metadata'
import FourOhFour from '@/components/404'
import Store from '@/js/store/index'

Vue.use(VueRouter)
const router = new VueRouter({
	props: true,
	routes: [
	{ path: '/', component: Home },
	{ path: '/privacy', component: Privacy },
	{ path: '/metadata', component: Metadata },
	{ path: '/microphone', component: Hint },
	{ path: '/question/:index', component: Question, props: true },
	{ path: '/thanks', component: Thanks },
	{ path: '/imprint', component: Imprint },
	{ path: '/privacy-notice', component: PrivacyNotice },
	{ path: '/cookie', component: Cookie },
	{ path: '/404', component: FourOhFour },
	{
		path: '*',
		redirect: '/404',
	},
	],
})

// Add navigation guards to protect routes that should only be accessible with
// a token and / or accepted privacy policy
router.beforeEach((to, from, next) => {
	const publicRoutes = ['/', '/404', '/cookie', '/privacy', '/metadata', '/imprint', '/privacy-notice', '/thanks']
	const privacyRoutes = ['/', '/404', '/cookie', '/privacy','/imprint', '/privacy-notice']
	const cookieRoutes = ['/', '/404', '/cookie','/imprint', '/privacy-notice']
	const privacyAcknowledgementRequired = !privacyRoutes.includes(to.path)
	const cookieAcknowledgementRequired = !cookieRoutes.includes(to.path)
	const authRequired = !publicRoutes.includes(to.path)

	if (cookieAcknowledgementRequired && !Store.getters.getCookieAcknowledgement) {
		return next('/cookie')
	}
	else if (privacyAcknowledgementRequired && !Store.getters.getPrivacyAcknowledgement) {
		return next('/privacy')
	} else if (authRequired && Store.getters.getToken == null) {
		return next('/')
	} else {
		next()
	}
})

export default router
