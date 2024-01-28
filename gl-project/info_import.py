import os
import json
import django

# Set the Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "glApp.settings")
django.setup()

from lawyers.models import LawyerProfile

def import_lawyers_from_json(json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

        for lawyer_data in data:
            name = lawyer_data.get('name', '')
            specializations = lawyer_data.get('specializations', [])
            phone = lawyer_data.get('contact', {}).get('phone', '')
            bio = lawyer_data.get('bio', '')
            address_id = lawyer_data.get('address_id', '')  # Assuming you have an 'address_id' in your JSON

            lawyer_profile = LawyerProfile(
                user__first_name=name,  # Assuming 'name' is a combination of first_name and last_name
                user__last_name='',  # Assuming 'name' is a combination of first_name and last_name
                phone_number=phone,
                bio=bio,
                address_id=address_id,
                language='',
                approved=False
            )
            lawyer_profile.set_specialization(specializations)
            lawyer_profile.save()

        print('Lawyer profiles imported successfully.')


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Import lawyers from JSON file.')
    parser.add_argument('json_file', type=str, help='Path to the JSON file')
    args = parser.parse_args()

    import_lawyers_from_json(args.json_file)
