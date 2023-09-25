from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DepartmentViewSet, LabViewSet, PurchaseOrderViewSet, EquipmentViewSet, EquipmentIssueViewSet, EquipmentReviewViewSet, LabInChargeViewSet, LabInchargeRegisterViewSet, LabInchargeLoginViewSet
from lab.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView
from rest_framework_simplejwt import views as jwt_views

# Create a router and register your viewsets with it.
router = DefaultRouter()
router.register(r'department', DepartmentViewSet)
router.register(r'lab', LabViewSet)
router.register(r'purchase_order', PurchaseOrderViewSet)
router.register(r'equipment', EquipmentViewSet)
router.register(r'equipment_issue', EquipmentIssueViewSet)
router.register(r'equipment_review', EquipmentReviewViewSet)
router.register(r'labincharge', LabInChargeViewSet)
# router.register(r'Login_api', Login_api)
router.register(r'LabInchargeRegister', LabInchargeRegisterViewSet)
router.register(r'LabInchargeLogin', LabInchargeLoginViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token_refresh'),
]
