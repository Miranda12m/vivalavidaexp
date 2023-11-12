from django.db import models

class Tour(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    hour = models.CharField(max_length=10)  
    duration = models.CharField(max_length=20)
    language = models.CharField(max_length=50)
    meeting_point = models.CharField(max_length=255)
    price = models.CharField(max_length=50)
    image = models.ImageField(null=True, blank=True, upload_to='images/')
    url = models.URLField()

    def __str__(self):
        return self.title
